[![NSP Status](https://nodesecurity.io/orgs/spirals/projects/a9780b5f-f1d9-4559-a7cd-3889f66d2737/badge)](https://nodesecurity.io/orgs/spirals/projects/a9780b5f-f1d9-4559-a7cd-3889f66d2737)

[![Build Status](https://travis-ci.org/signaes/spirals.svg?branch=master)](https://travis-ci.org/signaes/spirals)

# spirals

Simple functional utilities for javascript.

For the moment: `Maybe` and `Either`

Examples:

```
const double = n => n + n;

Maybe(1).map(double).value;
// returns 2

Maybe(null).map(double).value;
// returns null

Either({
    value: null,
    left: () => 'nothing here',
    right: value => value * 10
  });
// returns 'nothing here'

Either({
    value: 1.5,
    left: () => 'nothing here',
    right: value => value * 10
  });
// returns 15
```
