import { useState } from "react";
import Itemcard from "./Itemcard";

const RestarentCategoiry = (props) => {
  let [Showitem, setShowitem] = useState(false);

  const handleClick = () => {
    setShowitem(!Showitem);
  };

  let { title } = props.data;
  return (
    <>
      <div className="border-bottom">
        <div>
          <div className=" d-flex justify-content-between my-2">
            <div className="fs-4">
              {title}( {props.data.itemCards.length})
            </div>
            <div onClick={handleClick} className="dropdown">
              {">"}
            </div>
          </div>
          {Showitem &&
            props.data.itemCards.map((itemCard, index) => {
              return <Itemcard items={itemCard} key={index} />;
            })}
        </div>
      </div>
    </>
  );
};
export default RestarentCategoiry;
