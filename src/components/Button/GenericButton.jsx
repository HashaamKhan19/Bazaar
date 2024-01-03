/*eslint-disable*/
import { Button } from "@nextui-org/react";
import React from "react";

const GenericButton = ({ text, onClick, disabled, color, className }) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      color={color}
      className={className}
    >
      {text}
    </Button>
  );
};

export default GenericButton;
