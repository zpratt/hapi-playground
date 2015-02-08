(function () {
    'use strict';

    var halacious = require('halacious'),
        util = require('util');

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

    module.exports = {
        create: configureAPI
    };
}());
