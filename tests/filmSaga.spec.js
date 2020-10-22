/* eslint-disable no-undef */
import { takeLatest } from 'redux-saga/effects'
import { getFilmsActionWatcher,getFilmsActionEffect } from '../src/sagas/filmsSaga'

describe('getFilmsActionWatcher', () => {
  const genObject = getFilmsActionWatcher()
  
  it('should wait for every GET_FILMS_REQUEST action and call getFilmsActionEffect', () => {
    expect(genObject.next().value)
      .toEqual(takeLatest('GET_FILMS_REQUEST', getFilmsActionEffect))
  })
  
  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy()
  })
})
