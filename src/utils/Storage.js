import { Cookies } from 'react-cookie'

const Storage = () => {
  // constants
  const LOCAL_STORAGE = 'LOCAL_STORAGE'
  const COOKIES = 'COOKIES'
  const defaultStorage = window.localStorage

  let storage = defaultStorage
  let type

  try {
    type = LOCAL_STORAGE
    storage.setItem('type', 'LS')
  } catch (error) {
    console.log(error)
    // 'localStorage is not available, using Cookies for storage instead.'
    type = COOKIES
    storage = new Cookies()
    storage.set('type', 'CK')
  }

  const isLS = type === LOCAL_STORAGE

  const SET = isLS ? 'setItem' : 'set'
  const GET = isLS ? 'getItem' : 'get'
  const REMOVE = isLS ? 'removeItem' : 'remove'

  return {
    set: async (prop, value) => {
      await null
      return await storage[SET](prop, value)
    },

    get: async (prop) => {
      await null
      return await storage[GET](prop)
    },

    remove: (prop) => {
      return storage[REMOVE](prop)
    },
  }
}

export default Storage()
