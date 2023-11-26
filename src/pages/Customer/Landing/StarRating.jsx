import React, { useState } from "react";
import StarRatingComponent from "../../../components/Customer/Rating/StarRatingComponent";

const StarRating = () => {
  return (
    <div className="flex justify-center">
      <StarRatingComponent
        iconsCount={5}
        size={25}
        SVGclassName={`inline-block`}
        transition={true}
      />
    </div>
  );
};

export default StarRating;
