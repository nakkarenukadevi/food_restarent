function RestCard(props) {
  let { name, avgRating, cloudinaryImageId, locality, id, parentId, cuisines } =
    props.restarent.info;
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img
            className="img"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
            alt="rescard"
          />
          <div className="cuisines text-center">
            <div>{name}</div>
            <div className="rating">Rating:{avgRating}</div>
            {/* <div className="cuisines">{cuisines.join(",")}</div> */}
            <div>{locality}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export const withBestOffer = (RestCard) => {
  return (props) => {
    // console.log(props);
    return (
      <div>
        <label>{props.restarent.info?.aggregatedDiscountInfoV3?.header} </label>
        <RestCard {...props} />
      </div>
    );
  };
};
export default RestCard;
