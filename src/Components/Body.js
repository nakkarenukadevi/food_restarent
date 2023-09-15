import { useEffect, useState } from "react";
import RestCard, { withBestOffer } from "../Components/RestCard";
import { Link } from "react-router-dom";

const Body = () => {
  let [restlist, setrestlist] = useState([]);
  // console.log(restlist);
  useEffect(() => {
    data();
  }, []);

  let RestCardBestOffer = withBestOffer(RestCard);

  async function data() {
    let data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.314843&lng=80.45092&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    let datalist = await data.json();

    setrestlist(
      datalist.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // console.log(datalist.data);
  }

  return (
    <>
      <div className="container-fluid d-flex-inline">
        <div className="container">
          {restlist &&
            restlist.map((restarent) => {
              // console.log(restarent.info);

              return (
                <div className="promo-card m-2" key={restarent.info.id}>
                  <Link to={"/resMenu/" + restarent.info.id}>
                    {restarent?.info?.aggregatedDiscountInfoV3?.header ? (
                      <RestCardBestOffer
                        restarent={restarent}
                        key={restarent.info.id}
                      />
                    ) : (
                      <RestCard restarent={restarent} key={restarent.info.id} />
                    )}
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
      ;
    </>
  );
};

export default Body;
