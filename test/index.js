'use strict'

import test from 'tape'
import validate from '../'

test((t) => {
  function when (key) {
    return validate.bind(null, key)
  }
  t.throws(when(''), /empty keys/)
  t.throws(when('foo/'), /does not allow "\/" in key "foo\/"/)
  t.end()
})
