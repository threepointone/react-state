react-state
---

localized state in React render functions.

`npm install react-state --save`

```js
class Counter{
  render(){
    return <State initial={0}>{
      (val, set) =>
        <div onClick={() => set(val + 1)}>
          clicked {val} times
        </div>
    }</State>;
  }
}


React.render(<Counter/>, el); // just works.

// there's also a functional form to mask the reacty bits

class Counter{
  render(){
    return state({initial: 0}, (val, set) =>
      <div onClick={() => set(val + 1)}>
        clicked {val} times
      </div>);
  }
}

// that said, do remember that it's the reacty nature of
// that 'instance' that preserves it across renders, etc.
```

props
---

- initial
- onChange: function
- `children`: function

[based on this thread](https://discuss.reactjs.org/t/children-as-a-function-render-callbacks/626)

made this repo to use / test shallow rendering and whatnot. wish me luck.

(tests curently PASS.)