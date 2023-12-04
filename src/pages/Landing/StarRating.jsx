import React from "react";
import StarRatingComponent from "../../components/Customer/Rating/StarRatingComponent";

const StarRating = () => {
  return (
    <div className="">
      <StarRatingComponent iconsCount={5} size={25} transition={true} />
    </div>
  );
};

export default StarRating;
