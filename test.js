'use strict'

var test = require('tape')
var validate = require('./')

test(function (t) {
  t.notOk(validate(''))
  t.notOk(validate('foo/'))
  t.ok(validate('foo'))
  t.end()
})
