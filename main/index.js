const Box = value => ({
  map: f => Box(f(value)),
  expose: f => f(value),
  inspect: () => `Box(${value})`
});

const Right = value => ({
  map: f => Right(f(value)),
  expose: f => f(value),
  inspect: () => `Right(${value})`
});

const Left = value => ({
  map: () => Left(value),
  expose: () => value,
  inspect: () => `Left(${value})`
});

const Maybe = value => ({
  isNothing: () => value === null || value === undefined,
  map: f => Maybe(value).isNothing() ? Maybe(null) : Maybe(f(value)),
  inspect: () => `Maybe(${value})`,
  value
});

const Either = (left, right, value) => Maybe(value).isNothing()
  ? left(value)
  : right(value);

module.exports = {
  Box: Box,
  Right: Right,
  Left: Left,
  Maybe: Maybe,
  Either: Either
};
