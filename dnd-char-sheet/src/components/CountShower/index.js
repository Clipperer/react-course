import { useContext } from "react";
import { AppContext } from "../../contexts/app-context";

const CountShower = () => {
  const { count } = useContext(AppContext);
  return <>Count is: {count}</>;
};
export default CountShower;
