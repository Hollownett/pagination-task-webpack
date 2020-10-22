/* eslint-disable no-undef */
import { takeLatest } from 'redux-saga/effects'
import { getPlanetsActionWatcher, getPlanetsActionEffect } from '../src/sagas/planetsSaga'

describe('getPlanetsActionWatcher', () => {
  const genObject = getPlanetsActionWatcher()
  
  it('should wait for every GET_PLANETS_REQUEST action and call getPlanetsActionEffect', () => {
    expect(genObject.next().value)
      .toEqual(takeLatest('GET_PLANETS_REQUEST', getPlanetsActionEffect))
  })
  
  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy()
  })
})