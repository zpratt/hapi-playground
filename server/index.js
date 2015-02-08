(function () {
    'use strict';

    var server = require('./server'),
        apiNamespace = require('./api-namespace'),
        controllers = require('./controllers'),

        path = require('path');

    function init() {
        var pathToViews = path.join(__dirname, '../views'),
            staticAssetPath = path.join(__dirname, '../client'),
            serverInstance = server.create(8080, pathToViews, staticAssetPath);

        apiNamespace.create(serverInstance);

        controllers.forEach(function (controller) {
            serverInstance.route(controller.controller);
        });

        server.start();
    }

    init();
}());
