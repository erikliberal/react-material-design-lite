var React = require("react");
var CssClasses_ = {
    CONTAINER: 'mdl-textfield',
    LABEL: 'mdl-textfield__label',
    INPUT: 'mdl-textfield__input',
    IS_DIRTY: 'is-dirty',
    IS_FOCUSED: 'is-focused',
    IS_DISABLED: 'is-disabled',
    IS_INVALID: 'is-invalid',
    IS_UPGRADED: 'is-upgraded',
    HAS_PLACEHOLDER: 'has-placeholder'
};

var TextFieldInput = React.createClass({
  displayName: "TextFieldInput",
  render:function(){
    var classes = [CssClasses_.INPUT];
    return React.DOM.input({
      className: classes.join(' '),
      autofocus: this.props.autofocus,
      onFocus:this.props.onFocus,
      onBlur:this.props.onBlur,
      onInput:this.props.onInput,
      type: "text",
      id: this.props.id
    });
  }
});
var TextFieldLabel = React.createClass({
  displayName: "TextFieldLabel",
  render:function(){
    var classes = [CssClasses_.LABEL];
    return React.DOM.label({
      className: classes.join(' '),
      htmlFor: this.props.for
    },this.props.label);
  }
});

var TextField = React.createClass({
  displayName: "TextField",
  getInitialState:function(){
    return {id:this.props.id || Date.now().toString(32),focused:false}
  },
  handleFocus:function(evt){
    var state = Object.assign({},this.state);
    state.focused=true;
    this.setState(state);
  },
  handleBlur:function(evt){
    var state = Object.assign({},this.state);
    state.focused=false;
    this.setState(state);
  },
  handleInput:function(evt){
    var state = Object.assign({},this.state);
    state.value=evt.target.value;
    this.setState(state);
  },
  render: function() {
    var id = this.state.id;
    var label = this.props.label || '';
    var classes=[CssClasses_.CONTAINER,'mdl-js-textfield'];
    if (this.props.floatingLabel){
      classes.push('mdl-textfield--floating-label');
      if (this.state.focused){
        classes.push(CssClasses_.IS_FOCUSED);
      }
      if (this.state.disabled){
        classes.push(CssClasses_.IS_DISABLED);
      }
      if (this.state.value && this.state.value.length > 0){
        classes.push(CssClasses_.IS_DIRTY);
      }
    }
    return React.DOM.div({
      ref:this.handleRefs,
      className: classes.join(' ')
    }, React.createElement(TextFieldInput, {
      id:id,
      autofocus:this.props.autofocus,
      onFocus:this.handleFocus,
      onBlur:this.handleBlur,
      onInput:this.handleInput,
      value:this.state.value
    }), React.createElement(TextFieldLabel, {for:id,label:label}));
  }
});
module.exports = TextField;
