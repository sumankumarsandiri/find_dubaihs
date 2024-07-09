import React from "react";
import { useState } from "react";
import { IoMdHeart } from "react-icons/io";
const Like = () => {
  const like = Array(1).fill(0);
  const [likeValue, setLikeValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  //   const [currentValue, setCurrentValue] = useState(0);

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  const handleLikeClick = (value) => {
    setLikeValue(value);
  };
  const colors = {
    orange: "#FFBA5A",
    gary: "#F3F7EC",
    red: "#C40C0C",
  };
  return (
    <div className="like">
      {like.map((_, index) => {
        return (
          <IoMdHeart
            key={index}
            size={52}
            style={{
              //   marginRight: 85,

              cursor: "pointer",
            }}
            color={(hoverValue || likeValue) > index ? colors.red : colors.gary}
            onClick={() => handleLikeClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
};

export default Like;