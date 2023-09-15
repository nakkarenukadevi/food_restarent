import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

const Itemcard = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    //dispatch an action
    dispatch(addItem(items));
  };
  return (
    <div className="d-flex justify-content-around my-3 border-bottom p-3">
      <div>
        {items.card.info.name}
        <div>Rs/-{items.card.info.price / 100}</div>
      </div>

      <div className="item_img">
        {items.card.info.nextAvailableAtMessage ? (
          <div className="item_available">
            {items.card.info.nextAvailableAtMessage}
          </div>
        ) : items.card.info.imageId ? (
          <img
            className="img"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${items.card.info.imageId}`}
          />
        ) : null}
        <button
          className="itemcard btn btn-primary "
          onClick={() => handleAddItem(items)}
        >
          Add
        </button>
      </div>
    </div>
  );
};
export default Itemcard;
