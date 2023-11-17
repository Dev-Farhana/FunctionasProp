import React from "react";

function Click({ text = "Click Me!", color = "purple", fontSize = 12, handleClick }) {
   
  const buttonStyle = {
      color: color,
      fontSize: fontSize + "px"
    };
  
    return (
      <>
      <button onClick={() => handleClick('https://www.theodinproject.com')} style={buttonStyle}>
        {text}
      </button>
      </>
    );
  }

export default Click;

