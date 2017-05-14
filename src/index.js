export const Maybe = value => ({
  isNothing: () => value === null || value === undefined,
  map: f => Maybe(value).isNothing() ? Maybe(null) : Maybe(f(value)),
  inspect: () => `Maybe(${value})`,
  value
});

export const Either = ({ left, right, value }) => Maybe(value).isNothing()
  ? left(value)
  : right(value);
