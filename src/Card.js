import React, { useState } from "react";
import Search from "./Search";
import StarRating from "./StarRating";
import HardMode from "./HardMode";

function Card({ stateChanger, metaData, id, prompt }) {
  const [coverIndex, setCoverIndex] = useState(0);
  const [cover, setCover] = useState(metaData[id].imgLink);

  const nextCover = () => {
    if (metaData[id].altCovers && metaData[id].altCovers.length > 0) {
      const allCovers = metaData[id].altCovers;
      const newIndex = (coverIndex + 1) % allCovers.length;
      setCoverIndex(newIndex);
      
      const newCoverUrl = allCovers[newIndex];
      setCover(newCoverUrl);
  
  
      // Update the metadata with the new selected cover
      const itemsCopy = metaData.slice();
      const idx = itemsCopy.findIndex((x) => x.id === parseInt(id));
      itemsCopy[idx] = {
        ...itemsCopy[idx],
        imgLink: newCoverUrl,
      };
    
      stateChanger(itemsCopy);
    }
  };

  const removeBook = () => {
    // Create a temporary copy of your items array
    const itemsCopy = metaData.slice();
    // Find the index of the items where the item has the id you want
    const idx = itemsCopy.findIndex((x) => x.id === parseInt(id));
    // Re-assign the item to have the same values as before (name and id), but change the checked to true
    itemsCopy[idx] = {
      ...itemsCopy[idx],
      imgLink: null,
      title: null,
      starRating: 0,
      isFilled: null,
      altCovers: null,
    };

    if ("hardMode" in metaData[id]) {
      itemsCopy[idx] = {
        ...itemsCopy[idx],
        hardMode: false,
      };
    }

    // Update the state with our modified copy
    stateChanger(itemsCopy);
  };

  return (
    <div className="my-1 px-1 w-full sm:w-1/2 md:w-1/3 lg:my-5 lg:px-5 lg:w-1/5">
      <div className="rounded-lg shadow-lg  min-h-full bg-coolor-2 flex flex-col">
      <div className="relative">
        <div className={metaData[id].isFilled ? "block" : "hidden"}>
          <button
              className="absolute top-2 left-2 z-10 bg-coolor-2 text-black hover:font-bold items-center justify-center rounded-full h-6 w-6"
              onClick={removeBook}
          >
            &times;
          </button>
        </div>
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src={
              metaData[id].imgLink
                ? cover
                : "https://picsum.photos/600/400/?random"
            }
          />
          {metaData[id].altCovers && metaData[id].altCovers.length > 0 && (
                    <div className={metaData[id].isFilled ? "block" : "hidden"}>
            <button
            onClick={nextCover}
            className="absolute bottom-2 right-2 z-10 bg-coolor-2 text-black hover:font-bold p-2 rounded-full"
            >
            ↻
          </button>
          </div>
        )}
      </div>
      
        <header className="h-32  items-center justify-between leading-tight p-2 md:p-4 text-center">
          <h1 className="text-lg text-center">{prompt}</h1>
        </header>
        <div className="align-middle">
          <Search
            stateChanger={stateChanger}
            metaData={metaData}
            returnCover={setCover}
            id={id}
          />
        </div>
        <div className={metaData[id].isFilled ? "block" : "hidden"}>
          <StarRating
            id={id}
            metaData={metaData}
            stateChanger={stateChanger}
            rating={metaData[id].starRating}
          />
        </div>
        <div
          className={
            metaData[id].isFilled && "hardMode" in metaData[id]
              ? "block"
              : "hidden"
          }
        >
          <HardMode
            id={id}
            metaData={metaData}
            stateChanger={stateChanger}
            hm={metaData[id].hardMode}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
