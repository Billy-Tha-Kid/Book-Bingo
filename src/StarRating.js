import React, { useState } from "react";

const StarRating = ({ stateChanger, metaData, id, rating }) => {
  const [hover, setHover] = useState(0);

  const handleButton = (index) => {
    // Create a temporary copy of your items array
    const itemsCopy = metaData.slice();
    // Find the index of the items where the item has the id you want
    const idx = itemsCopy.findIndex((x) => x.id === parseInt(id));
    // Re-assign the item to have the same values as before (name and id), but change the checked to true
    itemsCopy[idx] = { ...itemsCopy[idx], starRating: index };

    // Update the state with our modified copy
    stateChanger(itemsCopy);
  };

  return (
    <div className="flex justify-center text-2xl">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => handleButton(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
