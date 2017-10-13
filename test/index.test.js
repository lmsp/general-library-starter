/* eslint-env jest */
/* @flow */
import Index from '../src/index'

test('index test', () => {
  const index = new Index()
  expect(index.name).toEqual('MyIndex')
})
