var React;
try{ React = require('react-native'); }
catch(e){ React = require('react'); }


export const State = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func,
    children: React.PropTypes.func
  },
  getDefaultProps(){
    return {
      onChange: () => {}
    };
  },
  getInitialState() {
    return {
      value: this.props.initial
    };
  },
  setter(value){
    this.setState({value});
    this.props.onChange(value);
  },
  render() {
    return this.props.children(this.state.value, this.setter);
  }
});
