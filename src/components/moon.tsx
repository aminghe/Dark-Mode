import React, { useEffect } from "react";
import "./moon.scss";

type MoonType = {
  isDark?: boolean;
  onClick?: () => void;
};

const MoonComponent = (props: MoonType) => {
  const click = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  useEffect(() => {
  }, [props.isDark])

  return (
    <div onClick={click}>
      <img
        className="moon"
        src={
          "assets/images/" +
          (props.isDark === true ? "moon-dark" : "moon-light") +
          ".png"
        }
        alt=""
      />
    </div>
  );
};

export default MoonComponent;
