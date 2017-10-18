import { mount } from 'avoriaz'
import test from 'ava'
import Modal from './impl.vue'

test.serial.only('test modal', t => {
  const wrapper = mount(Modal, {
    propsData: {
      visible: true
    }
  })

  wrapper.vm.$on('close', () => {
    wrapper.setProps({
      visible: false
    })
  })

  t.true(wrapper.vm._visible, 'default prop `visible`')

  wrapper.vm.$emit('dimission', 'close')

  t.false(wrapper.vm._visible)
})