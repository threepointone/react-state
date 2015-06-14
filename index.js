'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var React = require('react');

var State = React.createClass({
  displayName: 'State',

  propTypes: {
    onChange: React.PropTypes.func,
    children: React.PropTypes.func
  },
  shouldComponentUpdate: function shouldComponentUpdate() {
    return true;
  },
  getDefaultProps: function getDefaultProps() {
    return {
      onChange: function onChange() {}
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.initial
    };
  },
  setter: function setter(value) {
    this.setState({ value: value });
    this.props.onChange(value);
  },
  render: function render() {
    return this.props.children(this.state.value, this.setter);
  }
});
exports.State = State;
