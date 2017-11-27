import moment from 'moment'
import is from 'is-type-of'

const SUPPORTED_FORMATS = ['MM-DD-YYYY', 'YYYY-MM-DD', 'MM/DD/YYYY', 'YYYY/MM/DD']

const _constants = {
  EVENT_DATE_CHANGE: 'SCALENDAR:DATE:CHANGE',
  MONDAY_FIRST: true,
  DEFAULT_FORMAT: 'YYYY-MM-DD'
}

class SCalendar {
  constructor (options = {}) {
    const {
      emitter
    } = options
    // assign instance
    this.emitter = emitter
    this._date = null
    this.months = moment.monthsShort()
    this.weekdays = moment.weekdaysShort()
  }

  /**
   * @return {moment.Moment}
   */
  get date () {
    return this._date
  }

  // noinspection JSAnnotator
  /**
   * @param {String|moment.Moment} value
   */
  set date (value) {
    // When creating a moment from a string,
    // we first check if the string matches known ISO 8601 formats,
    // we then check if the string matches the RFC 2822 Date time format
    // before dropping to the fall back of new Date(string)
    // if a known format is not found.
    // So here we force format flag to make painless :)
    if (typeof value === 'string') {
      value = moment(value, SUPPORTED_FORMATS)
    }
    if (is.date(value)) {
      value = moment(value)
    }
    if (moment.isMoment(value) && value.isValid()) {
      // compare equivalent
      if (!this._date || !value.isSame(this._date, 'day')) {
        const prevDate = this._date
        this._date = value
        this.emitter && this.emitter.emit(SCalendar.EVENT_DATE_CHANGE, {
          prevDate: prevDate,
          currDate: value.clone()
        })
      }
      return
    }
    throw new Error('invalid date value')
  }

  /**
   * @param {moment.Moment} date
   * @param {moment.Moment|null} activeDate
   * @private
   */
  static _generateMonthBoard (date, activeDate = null) {
    const rows = 6
    const cols = 7
    const cursorDate = date.clone().date(1)
    activeDate == null && (activeDate = date)
    // negative fill to reset head date
    const dayOffset = cursorDate.day()

    cursorDate.subtract(
      'days',
      SCalendar.MONDAY_FIRST ? (dayOffset === 0 ? 7 : dayOffset) : (dayOffset + 1)
    )

    return Array.from({length: rows * cols}).map(() => {
      // move 1 day
      cursorDate.add('days', 1)
      return {
        date: cursorDate.format('YYYY-MM-DD'),
        active: activeDate.isSame(cursorDate, 'day'),
        disabled: !cursorDate.isSame(date, 'month'),
        week: moment.weekdays()[cursorDate.day()],
        mm: cursorDate.month() + 1,
        dd: cursorDate.date(),
        toMoment () {
          return moment(this.date)
        }
      }
    })
  }

  makeMonthBoard () {
    return SCalendar._generateMonthBoard(this._date.clone())
  }

  makeYearBoard () {
    const date = this._date.clone()
    return Array.from({length: 12}).map((_, i) => {
      return SCalendar._generateMonthBoard(date.month(i), this._date)
    })
  }
}

// static
Object.assign(SCalendar, _constants)

export default SCalendar
