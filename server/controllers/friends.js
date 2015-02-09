(function () {
    'use strict';

    var friendsRepository = require('./friends-repository');

    function handler(request, reply) {
        reply(friendsRepository.all());
    }

    module.exports = {
        controller: {
            method: 'GET',
            path: '/friends',
            config: {
                handler: handler,
                plugins: {
                    hal: {
                        links: {
                            'tkr:enemies': '../enemies'
                        },
                        api: 'tkr:friends'
                    }
                }
            }
        }
    };
}());
