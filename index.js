'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var State = (function (_React$Component) {
  function State() {
    var _this = this;

    _classCallCheck(this, State);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }

    this.state = {
      value: this.props.initial
    };

    this.setter = function (value) {
      _this.setState({ value: value });
      _this.props.onChange(value);
    };
  }

  _inherits(State, _React$Component);

  _createClass(State, [{
    key: 'render',
    value: function render() {
      return this.props.children(this.state.value, this.setter);
    }
  }], [{
    key: 'propTypes',
    value: {
      onChange: _react2['default'].PropTypes.func,
      children: _react2['default'].PropTypes.func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      onChange: function onChange() {}
    },
    enumerable: true
  }]);

  return State;
})(_react2['default'].Component);

exports.State = State;

// mask the reacty parts
var state = function state(props, callback) {
  return _react2['default'].createElement(
    State,
    props,
    callback
  );
};
exports.state = state;
