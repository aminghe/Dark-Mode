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

  useEffect(() => {}, [props.isDark]);

  return (
    <div onClick={click}>
      <svg
        className="moon"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="512"
        height="512"
        x="0"
        y="0"
        viewBox="0 0 448 448.04455"
      >
        <g>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="m224.023438 448.03125c85.714843.902344 164.011718-48.488281 200.117187-126.230469-22.722656 9.914063-47.332031 14.769531-72.117187 14.230469-97.15625-.109375-175.890626-78.84375-176-176 .972656-65.71875 37.234374-125.832031 94.910156-157.351562-15.554688-1.980469-31.230469-2.867188-46.910156-2.648438-123.714844 0-224.0000005 100.289062-224.0000005 224 0 123.714844 100.2851565 224 224.0000005 224zm0 0"
            fill={props.isDark === true ? "#ffa500" : "white"}
            data-original="#000000"
          />
        </g>
      </svg>
    </div>
  );
};

export default MoonComponent;
