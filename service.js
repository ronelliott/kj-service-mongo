'use strict';

const is = require('is');

function MongoService($opts) {
    this.collection = $opts.collection;
    this.resource = $opts.resource;
}

Object.assign(MongoService.prototype, {
    create: function(data, callback) {
        this.resource
            .collection(this.collection)
            .insert(data, callback);
    },

    delete: function(id, callback) {
        this.resource
            .collection(this.collection)
            .delete({ _id: id }, callback);
    },

    get: function(id, callback) {
        this.resource
            .collection(this.collection)
            .findOne({ _id: id }, callback);
    },

    list: function(query, callback) {
        this.resource
            .collection(this.collection)
            .find(query)
            .toArray(callback);
    },

    update: function(id, data, callback) {
        this.resource
            .collection(this.collection)
            .update({ _id: id }, data, callback);
    },
});

module.exports = MongoService;
