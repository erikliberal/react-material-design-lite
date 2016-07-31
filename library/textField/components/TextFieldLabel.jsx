const React = require("react");
const CssClasses = require('./Constants.js').CssClasses;

const TextFieldLabel = React.createClass({
    displayName: "TextFieldLabel",
    render: function() {
        let classes = [CssClasses.LABEL];
        return (
            <label className={classes.join(' ')} htmlFor={this.props.for}>
                {this.props.label}
            </label>
        );
    }
});

module.exports = TextFieldLabel;
