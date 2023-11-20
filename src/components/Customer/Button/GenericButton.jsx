/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/react";
import React from "react";

const GenericButton = ({
  color,
  className,
  text,
  radius,
  size,
  isIconOnly,
  ...props
}) => {
  return (
    <Button
      color={color}
      className={className}
      radius={radius}
      size={size}
      isIconOnly={isIconOnly}
    >
      {text}
    </Button>
  );
};

export default GenericButton;
