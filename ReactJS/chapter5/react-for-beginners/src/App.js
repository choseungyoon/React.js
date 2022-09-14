import Button from "./Button"
import styles from "./App.module.css"
import { useEffect, useState } from "react";

function Hello() {
  function HiFunc(){
    console.log("hello");
    return ByFunc;
  }

  function ByFunc() {
    console.log("by");
  }

  useEffect(HiFunc,[]);
}

function App() {

  const [counter , setValue] = useState(0);
  const [keyword , setKeyword] = useState("");
  const [showing , setShowing] = useState(true );

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onShow = () => setShowing((prev) => !prev);

  useEffect(() => {
    console.log("RUN ONLY ONCE");
  }, []);

  useEffect(() => {
    console.log("RUN WHEN KEYWORD CHANGED");
  }, [keyword]);

  useEffect(() => {
    console.log("RUN WHEN COUNTER CHANGED");
  }, [counter]);

  return (
    <div>
      {showing ? <Hello/> : null}
      <hr></hr>
      <input
      value={keyword}
      onChange={onChange} 
      type="text" 
      placeholder="Search here...">
      </input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      <hr></hr>
      <button onClick={onShow}>{showing ? "show" : "hide"}</button>
    </div>
  );
}

export default App;
