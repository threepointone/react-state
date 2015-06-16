// there's the react form

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


// you can hide that with a function, and that kinda makes it clear what's really going on here
class Counter{
  render(){
    return state({initial: 0}, (val, set) =>
        <div onClick={() => set(val + 1)}>
          clicked {val} times
        </div>);
  }
}

