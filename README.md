# firebase-validate-key [![Build Status](https://travis-ci.org/bendrucker/firebase-validate-key.svg?branch=master)](https://travis-ci.org/bendrucker/firebase-validate-key)
Validate that a string is a valid Firebase key

## Installing

```sh
$ npm install firebase-validate-key
```

## API

##### `validate(key:String)` -> `undefined`

Validates a key and throws if it's invalid. Otherwise `validate` is a noop. Firebase keys may not be empty strings nor may they contain `.`, `$`, `#`, `[`, `]`, or `/`. 
