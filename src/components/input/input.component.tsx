import React from "react";

type InputComponentType = {
  placeholder?: string;
};

const InputComponent = (props: InputComponentType) => {
  return (
    <input
      className="dark:bg-gray-600 dark:placeholder-gray-100 dark:text-gray-100 shadow rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      placeholder={props.placeholder ?? ""}
    />
  );
};

export default InputComponent;
