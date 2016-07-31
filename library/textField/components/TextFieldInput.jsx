const React = require("react");
const CssClasses = require('./Constants.js').CssClasses;

const TextFieldInput = React.createClass({
    displayName: "TextFieldInput",
    render: function() {
        let classes = [CssClasses.INPUT];
        return (
            <input {...this.props} type="text" className={classes.join(' ')} value={this.props.value}/>
        );
    }
});

module.exports = TextFieldInput;
