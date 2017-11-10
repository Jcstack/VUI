import { mount } from 'avoriaz'
import test from 'ava'
import Table from './impl.vue'

test.serial('test table', t => {
  t.plan(3)

  const wrapper = mount(Table, {
    propsData: {
      columns: ['__select|全部', 'first|一栏', 'second|二栏'],
      rows: [{
        first: 'a',
        second: 'b'
      }],
      sortable: true
    }
  })

  t.is(wrapper.find('thead th').map(n => n.text().trim()).join(' '), '全部 一栏 二栏')

  let isDesc = true
  wrapper.vm.$on('order-by-column', state => {
    t.is(state.first.isDesc, (isDesc = !isDesc))
  })

  wrapper.vm._headClick('first')
  wrapper.vm._headClick('first')
})
