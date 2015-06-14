'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var React;
try {
  React = require('react-native');
} catch (e) {
  React = require('react');
}

var State = React.createClass({
  displayName: 'State',

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
