require('rimraf').sync('/tmp/test-sublevels')
var levelup = require('levelup')

var base = require('../')(levelup('/tmp/test-sublevels'))

var test = require('tape')

test('subsections', function (t) {
  t.deepEqual(base.sublevels, {})

  var foo = base.sublevel('foo')
  var bar = base.sublevel('bar')

  t.deepEqual(base.sublevels, {foo: foo, bar: bar})
  t.deepEqual(foo.sublevels, {})

  var fooBlerg = foo.sublevel('blerg')
  t.deepEqual(foo.sublevels, {blerg: fooBlerg})

  t.end()
})





