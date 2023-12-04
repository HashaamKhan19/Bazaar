/* eslint-disable react/prop-types */
import React from "react";
import { Rating } from "react-simple-star-rating";

const StarRatingComponent = ({ iconsCount, size, transition }) => {
  return (
    <div>
      <Rating
        iconsCount={iconsCount}
        size={size}
        SVGclassName={`inline-block`}
        transition={transition}
      />
    </div>
  );
};

export default StarRatingComponent;
