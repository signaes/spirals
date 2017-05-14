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
```
