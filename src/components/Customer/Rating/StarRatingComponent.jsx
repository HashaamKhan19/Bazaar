/* eslint-disable react/prop-types */
import React from "react";
import { Rating } from "react-simple-star-rating";

const StarRatingComponent = ({
  iconsCount,
  size,
  SVGclassName,
  transition,
}) => {
  return (
    <div>
      <Rating
        iconsCount={iconsCount}
        size={size}
        SVGclassName={SVGclassName}
        transition={transition}
        readonly
      />
    </div>
  );
};

export default StarRatingComponent;
