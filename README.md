[![Build Status](https://travis-ci.org/igbopie/spherov2.js.svg?branch=master)](https://travis-ci.org/igbopie/spherov2.js)
[![Test Coverage](https://api.codeclimate.com/v1/badges/5c57b5d2addf2ea48c34/test_coverage)](https://codeclimate.com/github/igbopie/spherov2.js/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/5c57b5d2addf2ea48c34/maintainability)](https://codeclimate.com/github/igbopie/spherov2.js/maintainability)
# Sphero API V2

Work in progress. Some commands are functional but not ready for prime time.


### TODO
* Create Peripheral Mock Wrapper
* Test Toy, Queue and Command
* BUG: CHECKSUM = 141 error For example: [ 141, 10, 22, 7, 51, 100, 0, 180, 0, 141, 216 ]
* Queue Modes
* Read info


## What is working

```sh
git clone git@github.com:igbopie/spherov2.js.git
cd sphero2.js
yarn install
yarn start
```

### Keys when running cmd-play

* `up arrow` - Move Up
* `down arrow` - Move Down
* `left arrow` - Move Left
* `right arrow` - Move Right
* `q` - Speed up by 10
* `z` - Speed down by 10
* `a` - Wake
* `s` - Sleep
* `p` - Exit