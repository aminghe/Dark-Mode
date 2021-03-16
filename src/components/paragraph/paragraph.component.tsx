import React from "react";

type ParagraphComponentType = {
  text?: string;
  className?: string;
};

const ParagraphComponent = (props: ParagraphComponentType) => {
  return <p className={props.className ?? ""}>{props.text}</p>;
};

export default ParagraphComponent;
