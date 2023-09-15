import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const hanlderemove = () => {
    dispatch(clearCart(cartItems));
  };

  return (
    <div className="container-fulid">
      <div className="container">
        <div className="row">
          {cartItems.map((item) => {
            return (
              <div key={item.card.info.id}>
                <div className="d-flex justify-content-around my-3 border-bottom p-3">
                  <div>
                    {item.card.info.name}
                    <div>Rs/-{item.card.info.price / 100}</div>
                  </div>

                  <div className="item_img">
                    {item.card.info.nextAvailableAtMessage ? (
                      <div className="item_available">
                        {item.card.info.nextAvailableAtMessage}
                      </div>
                    ) : item.card.info.imageId ? (
                      <img
                        className="img"
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}
                      />
                    ) : null}
                    <button
                      className="btn btn-primary "
                      style={{ width: "100px ", height: "60px" }}
                      onClick={() => hanlderemove()}
                    >
                      remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {cartItems.length == 0 && (
            <h1 className="text-center">cart is empty</h1>
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;
