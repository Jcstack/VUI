import { mount } from 'avoriaz'
import test from 'ava'
import Button from './impl.vue'


test.serial.only('test button', t => {
  const wrapper = mount(Button, {
    propsData: {
      colorModifier: 'primary',
      sizeModifier: 'large',
      isLoading: true
    }
  })

  t.true(wrapper.hasClass('is-primary'), 'colors modifiers')
  t.true(wrapper.hasClass('is-large'), 'sizes modifier')
  t.true(wrapper.hasClass('is-loading'), 'loading modifier')
})

test.todo('test button size')
