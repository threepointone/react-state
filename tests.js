/* global describe, it */

require('chai').should();

import React from 'react/addons';
import {State} from './index.js';
const {TestUtils} = React.addons;

function test(){
  return <State initial={0}>{
      (val, set) =>
        <div onClick={() => set(val + 1)}>{val}</div>
    }</State>;
}

function somewhatShallow(c){
  var r = TestUtils.createRenderer();
  r.render(c);
  let result = r.getRenderOutput();
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

  // it('shallow', function(){
  //   console.log(somewhatShallow(<TestComponent/>));
  // });


});


