import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestarentCategoiry from "./RestarentCategoiry";

const RestarentMenu = () => {
  let [resInfo, setresInfo] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const Data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.314843&lng=80.45092&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await Data.json();
    setresInfo(json.data);
  };
  if (resInfo === null) return <h1 className="text-center">welcome</h1>;

  const { name, cuisines, costforTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const Categoirys =
    resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className=" container-fulid">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1>{name}</h1>
            <div className="fs-4 text-danger">
              {cuisines.join(",")}-{costforTwoMessage}
            </div>

            {Categoirys.map((ca) => {
              return (
                <RestarentCategoiry
                  data={ca?.card?.card}
                  key={ca?.card?.card?.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestarentMenu;
