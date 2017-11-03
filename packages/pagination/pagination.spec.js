import { mount } from 'avoriaz'
import test from 'ava'
import Pagination from './impl.vue'

test.only('test pagination', t => {
  const wrapper = mount(Pagination, {
    propsData: {}
  })

  t.is(wrapper.vm.pages, 0, 'default `total` 0')
  t.is(wrapper.vm.slideLabels.length, 0, 'labels none')

  wrapper.setProps({
    total: 22,
    limit: 2,
    page: 11
  })

  t.is(wrapper.vm.pages, 11)
  t.is(wrapper.vm.slideLabels[0], 1)
  t.is(wrapper.vm.slideLabels[wrapper.vm.slideLabels.length - 1], 11)

  wrapper.vm.$on('on-page', n => {
    t.is(n, 7)
  })

  wrapper.setProps({
    page: 7
  })

})

test.todo('test move slide')