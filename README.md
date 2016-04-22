# crockpot-fromRoman [![Build Status](https://travis-ci.org/eternal44/crockpot-fromRoman.svg?branch=master)](https://travis-ci.org/eternal44/crockpot-fromRoman)

> Converts decimal integers to English.  See the main crockpot library for a full set of conversions.

## Install

```
$ npm install --save crockpot-fromRoman
```

## Development
To run tests follow the following instructions:

```
$ npm install -g gulp
$ npm install -g mocha
```

To run tests on file changes:
```
$ gulp test
```

Alternatively you can run individual tests:
```
$ mocha specs/**
```

## Usage

```js
var romanNumerToDecimal = require('crockpot-fromRoman')

decimalToEnglish('IV')
// 4
```
## License
MIT