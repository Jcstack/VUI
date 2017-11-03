import { mount } from 'avoriaz'
import test from 'ava'
import Table from './impl.vue'

test.serial('test table', t => {
  const wrapper = mount(Table, {
    propsData: {
      columns: ['__select|全部', 'first|一栏', 'second|二栏'],
      rows: [{
        first: 'a',
        second: 'b'
      }]
    }
  })

  t.is(wrapper.find('thead th').map(n => n.text().trim()).join(' '), '全部 一栏 二栏')
})