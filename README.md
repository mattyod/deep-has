# Deep has [![Build Status](https://travis-ci.org/mattyod/deep-has.png?branch=master)](https://travis-ci.org/mattyod/deep-has)

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

**x** would be:

```
[
    { 'bar': false },
    { 'foo.bar': '123' }
]
```

The tests also provide further insight.
