import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = () => {
  const colors = {
    orange: "#FFBA5A",
    gary: "#a9a9a9",
    red: "#C40C0C",
  };
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (value) => {
    setCurrentValue(value);
  };
  const handleMouseOver = (value) => {
    setHoverValue(value);
  };
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  return (
    <div className="star">
      {stars.map((_, index) => {
        return (
          <FaStar
            key={index}
            size={15}
            style={{
              marginTop: 10,
              marginRight: 5,

              cursor: "pointer",
            }}
            color={
              (hoverValue || currentValue) > index ? colors.orange : colors.gary
            }
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
};

export default Star;