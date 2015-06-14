react-state
---

localized state in React render functions.

`npm install react-state --save`

```js
class Counter{
  render(){
    return <State initial={0}>{ (val, set) =>
      <div onClick={() => set(val + 1)}>
        clicked {val} times
      </div>
    }</State>;
  }
}

React.render(<Counter/>, el);
```

[based on this thread](https://discuss.reactjs.org/t/children-as-a-function-render-callbacks/626)