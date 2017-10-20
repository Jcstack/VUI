import test from 'ava'
import {
  pluckValidCircleIndex
} from '../../sources/utils'


test.only('test [pluckValidCircleIndex]', t => {

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