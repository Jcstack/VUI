import test from 'ava'
import {
  pluckValidCircleIndex
} from '../../sources/utils'

import {
 createMixins,
 elements
} from '../../sources/utils/mixin'

test.only('test [createMixins]', t => {
  const colorModifierMixin = createMixins(['color'])

  t.true(colorModifierMixin.hasOwnProperty('props'), 'mixins need `props` attribute')
  t.true(colorModifierMixin.props.hasOwnProperty('color'))
  t.true('computed' in colorModifierMixin)
  t.is(typeof colorModifierMixin.computed.colorModifier, 'function')
})

test('test [pluckValidCircleIndex]', t => {

  t.is(typeof pluckValidCircleIndex, 'function')

  t.is(pluckValidCircleIndex(1, null, 10), 0)
  t.is(pluckValidCircleIndex(-1, null, 10), 9)

  t.is(pluckValidCircleIndex(5, 6, 10), 0)
  t.is(pluckValidCircleIndex(-5, 2, 10), 9)

  t.is(pluckValidCircleIndex(2, 2, 10), 4)
  t.is(pluckValidCircleIndex(-2, 2, 10), 0)

  t.is(pluckValidCircleIndex(10, 2, 5), 2)
  t.is(pluckValidCircleIndex(10, 2, 0), 2)

  t.is(pluckValidCircleIndex(-1, 10, 2), 0)
})