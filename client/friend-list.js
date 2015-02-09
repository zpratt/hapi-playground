/** @jsx React.DOM */
(function () {
    'use strict';

    var React = require('react');

    function renderFriends(friends) {
        var renderedFriends = friends.map(function (friend) {
            return React.DOM.li(null, friend.name);
        });

        return renderedFriends;
    }

    module.exports = React.createClass({
        render: function () {
            var list = React.DOM.ul(null, renderFriends(this.props.friends));

            return list;
        }
    });
}());
