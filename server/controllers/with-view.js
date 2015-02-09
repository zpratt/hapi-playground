(function () {
    'use strict';

    function handler(request, reply) {
        reply.view('index', { title: 'Friend List' });
    }

    module.exports = {
        controller: {
            method: 'GET',
            path: '/hello',
            handler: handler
        }
    };
}());
