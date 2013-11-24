# Deep has

Find all instances of a specified key within a given object.

## usage

With code such as:

```
var has = require('deep-has');

var obj = {
    foo: {
        bar: '123'
    },
    bar: false
};

var x = has(obj, 'bar');
```

**x** would eqaul:

```
[
    { 'foo.bar': '123' },
    { 'bar': false }
]
```