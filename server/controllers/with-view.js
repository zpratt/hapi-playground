(function () {
    'use strict';

    function handler(request, reply) {
        reply.view('index', { title: 'My home page' });
    }

    module.exports = {
        controller: {
            method: 'GET',
            path: '/hello',
            handler: handler
        }
    };
}());
