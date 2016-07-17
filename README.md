# kj-service-mongo
[![view on npm](http://img.shields.io/npm/v/kj-service-mongo.svg)](https://www.npmjs.org/package/kj-service-mongo)
[![view on npm](https://img.shields.io/npm/dm/kj-service-mongo.svg)](https://www.npmjs.org/package/kj-service-mongo)
[![Dependency Status](https://david-dm.org/ronelliott/kj-service-mongo.svg)](https://david-dm.org/ronelliott/kj-service-mongo)
[![Build Status](https://travis-ci.org/ronelliott/kj-service-mongo.png)](https://travis-ci.org/ronelliott/kj-service-mongo)
[![Coverage Status](https://coveralls.io/repos/ronelliott/kj-service-mongo/badge.svg?branch=master)](https://coveralls.io/r/ronelliott/kj-service-mongo?branch=master)
[![Code Climate](https://codeclimate.com/github/ronelliott/kj-service-mongo/badges/gpa.svg)](https://codeclimate.com/github/ronelliott/kj-service-mongo)


## Installation
Install using [NPM](https://github.com/isaacs/npm):

    npm install kj-service-mongo --save


## Usage
Add the module to the modules section of your config:

    modules.exports = {
        ...
        modules: [
            ...
            require('kj-service-mongo'),
            ...
        ],
    };
