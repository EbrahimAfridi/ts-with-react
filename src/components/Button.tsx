import React from "react";

// Extracting new type for props
type Color = "red" | "green" | "blue";

// Make a seprate type to reduce repetition
type ButtonProps = {
  text: string;
  bgColor: Color;
  textColor: string;
};
const Button = (props: ButtonProps) => {
  const { text, bgColor, textColor } = props;
  return (
    <div>
      <button
        style={{ backgroundColor: bgColor, color: textColor }}
        className="rounded px-3 py-2 absolute top-1/2 left-1/2"
      >
        click me! {text}
      </button>
    </div>
  );
};

export default Button;
