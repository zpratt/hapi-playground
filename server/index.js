(function () {
    'use strict';

    var server = require('./server'),
        apiNamespace = require('./api-namespace'),

        path = require('path');

    function init() {
        var pathToViews = path.join(__dirname, '../views'),
            staticAssetPath = path.join(__dirname, '../client'),
            serverInstance = server.create(8080, pathToViews, staticAssetPath);

        apiNamespace.create(serverInstance);

        serverInstance.route({
            method: 'GET',
            path: '/friends',
            config: {
                handler: function (req, reply) {
                    reply([
                        {
                            id: 1,
                            name: 'zach'
                        },
                        {
                            id: 2,
                            name: 'john'
                        }
                    ]);
                },
                plugins: {
                    hal: {
                        links: {
                            'tkr:enemies': '../enemies'
                        },
                        api: 'tkr:friends'
                    }
                }
            }
        });

        serverInstance.route({
            method: 'GET',
            path: '/enemies',
            config: {
                handler: function (req, reply) {
                    reply([
                        {
                            id: 1,
                            name: 'zach'
                        },
                        {
                            id: 2,
                            name: 'john'
                        }
                    ]);
                },
                plugins: {
                    hal: {
                        links: {
                            'tkr:friends': '../friends'
                        },
                        api: 'tkr:enemies'
                    }
                }
            }
        });

        serverInstance.route({
            method: 'GET',
            path: '/hello',
            handler: function (request, reply) {
                reply.view('index', { title: 'My home page' });
            }
        });

        server.start();
    }

    init();
}());
