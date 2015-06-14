/* global describe, it */

require('chai').should();

describe('State', function(){
  it('works', function(){
    var React = require('react/addons');
    var State = require('./index.js').State;
    var TestUtils = React.addons.TestUtils;

    // Render a 'stateful' div
    var stateful = TestUtils.renderIntoDocument(
      React.createElement(State, {initial: 0}, function(val, set){
        return React.createElement('div', {onClick: function(){ set(val + 1); }}, val);
      })
    );

    var div = TestUtils.findRenderedDOMComponentWithTag(
      stateful, 'div');
    div.getDOMNode().textContent.should.eql('0');

    // Simulate a click and verify that the value changed
    TestUtils.Simulate.click(div);
    div.getDOMNode().textContent.should.eql('1');
    TestUtils.Simulate.click(div);
    div.getDOMNode().textContent.should.eql('2');
  });

});

