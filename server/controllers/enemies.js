(function () {
    'use strict';

    function handler(req, reply) {
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
            path: '/enemies',
            config: {
                handler: handler,
                plugins: {
                    hal: {
                        links: {
                            'tkr:friends': '../friends'
                        },
                        api: 'tkr:enemies'
                    }
                }
            }
        }
    };
}());
