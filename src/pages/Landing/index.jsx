import { Button } from "@nextui-org/react";
import React from "react";
import { useTheme } from "../../context/ThemeContext";

const Landing = () => {
  const { toggleTheme } = useTheme();

  return (
    <>
      <p>Hi</p>
      <Button variant="solid" color="primary" onClick={toggleTheme}>
        Button
      </Button>
    </>
  );
};

export default Landing;
