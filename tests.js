/* global describe, it */

require('chai').should();

import React from 'react/addons';
import {State, state} from './index.js';
const {TestUtils} = React.addons;

function test(){
  return <State initial={0}>{
      (val, set) =>
        <div onClick={() => set(val + 1)}>{val}</div>
    }</State>;
}

function somewhatShallow(c){
  // this doesn't work as expected.
  var r = TestUtils.createRenderer();
  r.render(c);
  let result = r.getRenderOutput();

  if(typeof result.props.children === 'function'){
    result.props.children = somewhatShallow(result);
  }
  return result;
}

const TestComponent = React.createClass({
  render() {
    return test();
  }
});


describe('State', () => {
  it('works', () => {

    // Render a 'stateful' div
    var stateful = TestUtils.renderIntoDocument(test());

    var div = TestUtils.findRenderedDOMComponentWithTag(stateful, 'div');
    div.getDOMNode().textContent.should.eql('0');

    // Simulate a click and verify that the value changed
    TestUtils.Simulate.click(div);
    div.getDOMNode().textContent.should.eql('1');
    TestUtils.Simulate.click(div);
    div.getDOMNode().textContent.should.eql('2');
  });

  it('functional form', () => {

    // Render a 'stateful' div
    var stateful = TestUtils.renderIntoDocument(state({initial: 0}, (val, set) =>
        <div onClick={() => set(val + 1)}>{val}</div>));

    var div = TestUtils.findRenderedDOMComponentWithTag(stateful, 'div');
    div.getDOMNode().textContent.should.eql('0');

    // Simulate a click and verify that the value changed
    TestUtils.Simulate.click(div);
    div.getDOMNode().textContent.should.eql('1');
    TestUtils.Simulate.click(div);
    div.getDOMNode().textContent.should.eql('2');
  });



  it('shallow', function(){
    let result = somewhatShallow(<TestComponent/>);
    console.log(result.props.children.props.children);
    let normal = somewhatShallow(<div><span>asdasd</span></div>);
    console.log(normal.props.children);
  });


});


