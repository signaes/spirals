'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Maybe = function Maybe(value) {
  return {
    isNothing: function isNothing() {
      return value === null || value === undefined;
    },
    map: function map(f) {
      return Maybe(value).isNothing() ? Maybe(null) : Maybe(f(value));
    },
    inspect: function inspect() {
      return "Maybe(" + value + ")";
    },
    value: value
  };
};

var Either = function Either(_ref) {
  var left = _ref.left,
      right = _ref.right,
      value = _ref.value;
  return Maybe(value).isNothing() ? left(value) : right(value);
};

exports.Maybe = Maybe;
exports.Either = Either;
