# firebase-validate-key [![Build Status](https://travis-ci.org/bendrucker/firebase-validate-key.svg?branch=master)](https://travis-ci.org/bendrucker/firebase-validate-key)

> Validate that a string is a valid Firebase key

## Install

```sh
$ npm install --save firebase-validate-key
```

## Usage

```js
var validate = require('firebase-validate-key')
validate('foo') // => true
validate('#foo') // => false
```

## API

#### `validate(key)` -> `boolean`

##### key

*Required*  
Type: `string`

False if the key is empty or is  `.`, `$`, `#`, `[`, `]`, or `/`. Otherwise `true`.
