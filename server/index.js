(function () {
    'use strict';

    var hapi = require('hapi'),
        halacious = require('halacious'),
        util = require('util'),
        path = require('path');

    function createServer() {
        var server = new hapi.Server();

        server.connection({port: 8080});
        return server;
    }

    function configureViewEngine(server) {
        server.views({
            engines: {
                jsx: require('hapi-react-views')
            },
            compileOptions: {
                renderMethod: 'renderToString'
            },
            path: path.join(__dirname, '../views')
        });
    }

    function createNamespace(server) {
        var namespace;
        namespace = server.plugins.halacious.namespaces.add({
            name: 'tinker',
            description: 'a tinker\'s namespace',
            prefix: 'tkr'
        });
        return namespace;
    }

    function configureAPI(server) {
        var halaciousOptions = {
            apiPath: ''
        };

        server.register({register: halacious, options: halaciousOptions}, function (err) {
            var namespace;

            if (err) {
                util.log(err);
            }

            namespace = createNamespace(server);

            namespace.rel({
                name: 'friends',
                description: 'friends of tinker'
            });

            namespace.rel({
                name: 'enemies',
                description: 'enemies of tinker'
            });
        });
    }

    function init() {
        var server = createServer();

        configureViewEngine(server);
        configureAPI(server);

        server.route({
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

        server.route({
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

        server.route({
            method: 'GET',
            path: '/{client*}',
            handler: {
                directory: {
                    path: './client'
                }
            }
        });

        server.route({
            method: 'GET',
            path: '/hello',
            handler: function (request, reply) {
                reply.view('index', { title: 'My home page' });
            }
        });

        server.start(function (err) {
            if (err) {
                util.log('error: ' + err);
            }
            util.log('server started on: ' + server.info.uri);
        });
    }

    init();
}());
