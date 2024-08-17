import React from "react";

// Extracting new type for props
type Color = "red" | "green" | "blue";

// Make a seprate type to reduce repetition
type ButtonProps = {
  text: string;
  bgColor: Color;
  textColor?: string;
  paddingArray: string[];
  marginTuple?: [number, number];
};
const Button = (props: ButtonProps) => {
  const { text, bgColor, textColor, paddingArray, marginTuple } = props;
  return (
    <div>
      <button
        style={{
          backgroundColor: bgColor,
          color: textColor,
          padding: `${paddingArray[0]} ${paddingArray[1]} ${paddingArray[2]} ${paddingArray[3]}`,
          margin: `${marginTuple ? marginTuple[0] : 0}px ${marginTuple ? marginTuple[1] : 0}px`,
        }}
        className="rounded px-3 py-2 absolute top-1/2 left-1/2"
      >
        click me! {text}
      </button>
    </div>
  );
};

export default Button;
