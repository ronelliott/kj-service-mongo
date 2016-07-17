'use strict';

const is = require('is'),
      Service = require('./service');

module.exports = function($opts) {
    var inject = $opts.inject || '$service',
        resource = $opts.resource || '$mongo',
        collection = $opts.collection;

    return function($$resolver) {
        if (is.string(resource)) {
            resource = $$resolver(resource);
        }

        $$resolver.add(inject, new Service({
            collection: collection,
            resource: resource,
        }));
    };
};
