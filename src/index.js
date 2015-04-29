'use strict'

import find from 'babel-runtime/core-js/array/find'

const illegals = ['.', '$', '#', '[', ']', '/']

export default function validateKey (key) {
  if (!key.length) {
    throw new Error('Firebase does not allow empty keys')
  }
  const illegal = find(illegals, illegal => ~key.indexOf(illegal))
  if (illegal) {
    throw new Error(`Firebase does not allow "${illegal}" in key "${key}"`)
  }
}
