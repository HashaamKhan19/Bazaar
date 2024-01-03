import React from "react";
import { IoFilter, IoClose } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const ToggleButton = ({ onClick, isSidebarVisible }) => {
  return (
    <>
      {isSidebarVisible ? (
        <button
          onClick={onClick}
          className={`absolute top-4 right-0 px-8 z-50 duration-400 block xl:hidden`}
        >
          <IoClose size={22} />
        </button>
      ) : (
        <button
          onClick={onClick}
          className={`absolute top-36 sm:top-[200px] right-0 px-8 block xl:hidden`}
        >
          <IoFilter size={25} />
        </button>
      )}
    </>
  );
};

export default ToggleButton;
