/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <body>
                <h1>{this.props.title}</h1>
                <div className="friend-list"></div>
                <script src="static/app.js" type="text/javascript"></script>
            </body>
        );
    }
});
