const React = require("react");
const CssClasses = require('./Constants.js').CssClasses;

const TextFieldError = React.createClass({
    displayName: "TextFieldError",
    render: function() {
        return (
            <span className={CssClasses.ERROR_MSG}>{this.props.children}</span>
        );
    }
});

module.exports = TextFieldError;
