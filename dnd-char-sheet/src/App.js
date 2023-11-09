import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button";
import { useState } from "react";

function App() {
  console.log(logo);
  const [count, setCount] = useState(0);

  const clicker = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Button text="click me" count={count} handleClick={clicker} />
      <br />
      <Button text="click another" count={count} handleClick={clicker} />
    </>
  );
}

export default App;
