import { mount } from 'avoriaz'
import test from 'ava'
import Button from './button.js'

test.only.serial('test button', t => {
  const wrapper = mount(Button, {
    propsData: {
      color: 'primary',
      size: 'large',
      isLoading: true
    }
  })

  t.true(wrapper.hasClass('is-primary'), 'colors modifiers')
  t.true(wrapper.hasClass('is-large'), 'sizes modifier')
  t.true(wrapper.hasClass('is-loading'), 'loading modifier')
})

test.todo('test button size')
