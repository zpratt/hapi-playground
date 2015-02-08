/** @jsx React.DOM */

var React = require('react');

var HelloView = React.createClass({
    render: function() {
        return <body>
            <div>Hello {this.props.title}</div>
            <script src="static/index.js" type="text/javascript"></script>
            </body>;
    }
});

module.exports = HelloView;