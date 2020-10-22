/* eslint-disable no-undef */
import { takeLatest } from 'redux-saga/effects'
import { getPeoplesActionWatcher, getPeoplesActionEffect } from '../src/sagas/peoplesSaga'

describe('getPeoplesActionWatcher', () => {
  const genObject = getPeoplesActionWatcher()
  
  it('should wait for every GET_PEOPLES_REQUEST action and call getPeoplesActionEffect', () => {
    expect(genObject.next().value)
      .toEqual(takeLatest('GET_PEOPLES_REQUEST', getPeoplesActionEffect))
  })
  
  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy()
  })
})