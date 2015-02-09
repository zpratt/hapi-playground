(function () {
    'use strict';

    var FriendsListView = require('./friend-list'),

        traverson = require('traverson'),
        React = require('react');

    function renderListView(friends) {
        React.render(
            React.createElement(FriendsListView, {
                friends: friends
            }),
            document.querySelector('.friend-list')
        );
    }

    function init() {
        var api = traverson.jsonHal.from('/');

        api.newRequest()
            .follow('tkr:friends', 'tkr:enemies')
            //.withTemplateParameters({id: ''})
            .getResource(function (err, res) {
                var friends = [res[0], res[1]];

                renderListView(friends);
            });
    }

    init();
}());
