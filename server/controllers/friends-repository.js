(function () {
    'use strict';

    var Collection = require('ampersand-collection'),
        friendsCollection;

    function createCollection() {
        friendsCollection = new Collection([
            {
                id: 1,
                name: 'zach'
            },
            {
                id: 2,
                name: 'john'
            }
        ]);
    }

    function init() {
        if (!friendsCollection) {
            createCollection();
        }
    }

    function all() {
        return friendsCollection.models;
    }

    function findById(id) {
        return friendsCollection.get(id);
    }

    init();

    module.exports = {
        all: all,
        findById: findById
    };
}());
