(function () {
    'use strict';

    var hapi = require('hapi'),
        util = require('util'),

        server;

    function configureViewEngine(viewPath) {
        server.views({
            engines: {
                jsx: require('hapi-react-views')
            },
            compileOptions: {
                renderMethod: 'renderToString'
            },
            path: viewPath
        });
    }

    function defineStaticAssetHandler(staticAssetPath) {
        server.route({
            method: 'GET',
            path: '/static/{static*}',
            handler: {
                directory: {
                    path: staticAssetPath
                }
            }
        });
    }

    function createServer(port, viewPath, staticAssetPath) {
        server = new hapi.Server();

        server.connection({port: port});
        configureViewEngine(viewPath);
        defineStaticAssetHandler(staticAssetPath);

        return server;
    }

    function startServer() {
        if (server) {
            server.start(function (err) {
                if (err) {
                    util.log('error: ' + err);
                }
                util.log('server started on: ' + server.info.uri);
            });
        } else {
            console.error({}, 'server has not been created yet');
        }
    }

    module.exports = {
        create: createServer,
        start: startServer
    };
}());
