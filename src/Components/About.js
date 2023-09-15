import "bootstrap/dist/css/bootstrap.min.css";
import { createContext } from "react";
function About() {
  return (
    <>
      <div className="container-fulid">
        <div className="container">
          <div className="row">About componats</div>
        </div>
      </div>
    </>
  );
}
export default About;

export const Usercontext = createContext({
  Name: "renukadevi",
});
