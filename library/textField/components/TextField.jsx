const React = require("react");
const CssClasses = require('./Constants.js').CssClasses;
const TextFieldLabel = require('./TextFieldLabel.jsx');
const TextFieldInput = require('./TextFieldInput.jsx');
const TextFieldError = require('./TextFieldError.jsx');

function getClasses(){
    let classes = [CssClasses.CONTAINER, CssClasses.BASE_CSS_NAME];
    if (this.props.floatingLabel) {
        classes.push(CssClasses.FLOATING_LABEL);
        if (this.state.focused) {
            classes.push(CssClasses.IS_FOCUSED);
        }
        if (this.state.disabled) {
            classes.push(CssClasses.IS_DISABLED);
        }
        if (this.state.invalid){
            classes.push(CssClasses.IS_INVALID);
        }
        if (this.state.value && this.state.value.length > 0) {
            classes.push(CssClasses.IS_DIRTY);
        }
    }
    return classes.join(' ');
}

const TextField = React.createClass({
    displayName: "TextField",
    getInitialState: function() {
        return {
            id: this.props.id || Date.now().toString(32),
            focused: false,
            invalid:false
        }
    },
    handleFocus: function(evt) {
        this.setState(Object.assign({}, this.state, {focused:true}));
    },
    handleBlur: function(evt) {
        this.setState(Object.assign({}, this.state, {focused:false}));
    },
    handleInput: function(evt) {
        this.setState(Object.assign({}, this.state, {invalid:!evt.target.validity.valid, value:evt.target.value}));
    },
    render: function() {
        return (
            <div ref={this.handleRefs} className={getClasses.bind(this)()}>
                <TextFieldInput id={this.state.id} pattern={this.props.pattern} autofocus={this.props.autofocus} onFocus={this.handleFocus} onBlur={this.handleBlur} onInput={this.handleInput} value={this.state.value}/>
                <TextFieldLabel for={this.state.id} label={this.props.label || ''}/>
                <TextFieldError>{this.props.invalidPatternMessage}</TextFieldError>
            </div>
        );
    }
});
module.exports = TextField;
