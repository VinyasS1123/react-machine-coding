import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './App.css'

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  
  const starsArr = [...Array(noOfStars)];
  // console.log(starsArr);
  console.log("Rating",rating);
  console.log("Hover",hover);
  
  function handleMouseClick(index) {
    if(rating ===1) {
      setRating(0) 
      return
    }
    setRating(index)
  }
  function handleMouseEnter(index) {
    setHover(index)
  }
  function handleMouseLeave() {
    setHover(0)
  }
  

  return (
    <div className="star-rating">
      {starsArr.map((_, index) => {
        index += 1;
        return (
          <FaStar
          className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={() => handleMouseClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
