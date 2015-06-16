import React from 'react';

export class State extends React.Component {
  static propTypes = {
    onChange: React.PropTypes.func,
    children: React.PropTypes.func
  }

  static defaultProps = {
    onChange(){}
  }

  state = {
    value: this.props.initial
  }

  shouldComponentUpdate(){
    return true;
  }

  setter = value => {
    this.setState({value});
    this.props.onChange(value);
  }

  render(){
    return this.props.children(this.state.value, this.setter);
  }
}

// mask the reacty parts
export const state = (props, callback) =>
  <State {...props}>{callback}</State>;


