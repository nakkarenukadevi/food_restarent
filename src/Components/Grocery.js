import { useContext } from "react";
import { Usercontext } from "./About";

const Grocery = () => {
  let data = useContext(Usercontext);
  console.log(data);
  return <>dc{data.Name}</>;
};
export default Grocery;
