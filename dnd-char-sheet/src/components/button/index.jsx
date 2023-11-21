import { useContext } from "react";
import { AppContext } from "../../contexts/app-context";
import CountShower from "../CountShower";

const Button = ({ text }) => {
  const { count, setCount } = useContext(AppContext);

  console.log("count", count);
  return (
    <>
      <h1>{text}</h1>
      <CountShower />
      <br />
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <br />
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <br />
    </>
  );
};

export default Button;
