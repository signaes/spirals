import { Maybe } from '../main';
import test from 'ava';

test('Maybe(null) should be nothing', t => {
  t.is(Maybe(null).isNothing(), true);
});

test('Maybe(undefined) should be nothing', t => {
  t.is(Maybe(undefined).isNothing(), true);
});

test('Maybe("a") should not be nothing', t => {
  t.is(Maybe('a').isNothing(), false);
});

test('Maybe(1).map(n => n + n) should be Maybe(2)\n.map callback should be called on a value that is something', t => {
  t.is(Maybe(1).map(n => n + n).inspect(), 'Maybe(2)');
});

test('Maybe(null).map(n => n + n) should be Maybe(null)\n.map callback should not be called on a value that is nothing', t => {
  t.is(Maybe(null).map(n => n + n).inspect(), 'Maybe(null)');
});

test('Maybe(Object).get(prop) should return the property value if it exists, otherwise should return null', t => {
  t.is(Maybe({a: 'ok'}).get('a').value, 'ok');
  t.is(Maybe({a: 'ok'}).get('b').value, null);
  t.is(Maybe({}).get('b').value, null);
  t.is(Maybe(null).get('b').value, null);
  t.is(Maybe('string').get('b').value, null);
  t.is(Maybe('string').get('length').value, 'string'.length);
});

test('Maybe(1).inspect() should return the string "Maybe(1)"', t => {
  t.is(Maybe(1).inspect(), 'Maybe(1)');
});

test('Maybe(1).value should return 1\n.value should return the value inside Maybe', t => {
  t.is(Maybe(1).value, 1);
});
