import React from "react";

type ButtonComponentType = {
  title?: string;
  className?: string;
};

const ButtonComponent = (props: ButtonComponentType) => {
  return (
    <button
      className={
        (props.className ?? "") +
        " pl-10 pr-10 text-white font-bold py-2 px-4 rounded"
      }
    >
      {props.title ?? "-"}
    </button>
  );
};

export default ButtonComponent;
