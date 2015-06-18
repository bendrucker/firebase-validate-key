'use strict'

var escape = require('escape-string-regexp')
var illegals = ['.', '$', '#', '[', ']', '/']
var regexes = illegals.map(function (character) {
  return new RegExp(escape(character))
})

exports = module.exports = function validateFirebaseKey (key) {
  if (!key.length) return false
  return !regexes.some(function (regex) {
    return regex.test(key)
  })
}

exports.illegals = illegals
