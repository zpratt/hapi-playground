(function () {
    'use strict';

    function handler(request, reply) {
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
