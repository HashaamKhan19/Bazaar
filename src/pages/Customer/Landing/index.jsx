import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useTheme } from "../../context/ThemeContext";

const Landing = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="space-y-4">
      <p>Hi</p>
      <Button variant="solid" color="primary" onClick={toggleTheme}>
        Click me
      </Button>
      <img src="/src/assets/svg/logo.svg" alt="Logo" />
      <p>
        My name is <span className="text-primary-400">hashaam</span>
      </p>
      <p>
        My name is <span className="text-primary-800">hashaam2</span>
      </p>
      <Input
        type="email"
        label="Email"
        className="w-[200px]"
        size="sm"
        color="primary"
        placeholder="Enter your email"
      />
      <Input
        type="email"
        label="Email"
        className="w-[200px]"
        size="md"
        color="primary"
      />
      <Input
        type="email"
        label="Email2"
        className="w-[200px]"
        size="md"
        color="primary"
        variant="bordered"
      />
      <Input
        type="email"
        label="Email"
        className="w-[200px]"
        size="lg"
        color="danger"
      />
    </div>
  );
};

export default Landing;
