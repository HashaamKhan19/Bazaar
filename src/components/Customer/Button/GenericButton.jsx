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
  variant,
  ...props
}) => {
  return (
    <Button
      color={color}
      className={className}
      variant={variant}
      radius={radius}
      size={size}
      isIconOnly={isIconOnly}
    >
      {text}
    </Button>
  );
};

export default GenericButton;
