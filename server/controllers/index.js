(function () {
    'use strict';

    var friendsController = require('./friends'),
        enemiesController = require('./enemies'),
        withView = require('./with-view');

    module.exports = [
        friendsController,
        enemiesController,
        withView
    ];
}());
