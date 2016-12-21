export const Box = value => ({
  map: f => Box(f(value)),
  expose: f => f(value),
  inspect: () => `Box(${value})`
});

export const Right = value => ({
  map: f => Right(f(value)),
  expose: f => f(value),
  inspect: () => `Right(${value})`
});

export const Left = value => ({
  map: () => Left(value),
  expose: () => value,
  inspect: () => `Left(${value})`
});

export const Maybe = value => ({
  isNothing: () => value === null || value === undefined,
  map: f => this.isNothing() ? Maybe(null) : Maybe(f(this.value)),
  getValue: () => value,
  inspect: () => `Maybe(${value})`
});

export const Either = (left, right, value) => Maybe(value).isNothing()
  ? left(value)
  : right(value);
