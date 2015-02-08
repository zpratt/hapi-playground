/** @jsx React.DOM */

var React = require('react');

var HelloView = React.createClass({
    render: function() {
        return <div>Hello {this.props.title}</div>;
    }
});

module.exports = HelloView;