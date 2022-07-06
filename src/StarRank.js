import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

{
  /* [...Array(5) creates an empty array with 5 undefined items] 
            [...Array(5).map(star)=> {return <FaStar}] maps over the 5 undefined items 
            returns 5 <FaStar> components
        */
}

const StarRate = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const starVal = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={starVal}
              onClick={() => setRating(starVal)}
              onMouseEnter={() => setHover(starVal)}
              onMouseLeave={() => setHover(null)}
            />
            <FaStar
              className="star"
              color={starVal <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={20}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRate;
