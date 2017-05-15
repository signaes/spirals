import { Either } from '../main';
import test from 'ava';

test('Either({left: () => 0, right: () => 1, value: null}) should return 0\nit should go with the left callback', t => {
  const either = Either({
    left: () => 0,
    right: () => 1,
    value: null
  });

  t.is(either, 0);
});

test('Either({left: () => 0, right: () => 1, value: "ok"}) should return 1\nit should go with the right callback when the value is something', t => {
  const either = Either({
    left: () => 0,
    right: () => 1,
    value: 'ok'
  });

  t.is(either, 1);
});
