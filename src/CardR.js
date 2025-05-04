import React, { useState, useRef } from "react";
import Search from "./Search";
import StarRating from "./StarRating";
import HardMode from "./HardMode";

function CardR({
  stateChanger,
  metaData,
  id,
  defaultPrompt,
  shortStories = false,
  modalButton,
}) {
  const [coverIndex, setCoverIndex] = useState(0);
  const [cover, setCover] = useState(metaData[id].imgLink);
  const [prompt, setPrompt] = useState(metaData[id].prompt || defaultPrompt);
  const [isUpdating, setisUpdating] = useState(false);
  const ref = useRef(null);

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

  const editPrompt = (prompt) => {
    setisUpdating(true);
    setTimeout(function () {
      ref.current.focus();
    }, 0);
  };

  const acceptPrompt = () => {
    const newPrompt = ref.current.innerText;
    setisUpdating(false);
    setPrompt(newPrompt);

    // Create a temporary copy of your items array
    const itemsCopy = metaData.slice();
    // Find the index of the items where the item has the id you want
    const idx = itemsCopy.findIndex((x) => x.id === parseInt(id));
    // Re-assign the item to have the same values as before (name and id), but change the checked to true
    itemsCopy[idx] = {
      ...itemsCopy[idx],
      prompt: newPrompt,
    };

    // Update the state with our modified copy
    stateChanger(itemsCopy);
  };

  return (
    <div className="my-1 px-1 w-full sm:w-1/2 md:w-1/3 lg:my-5 lg:px-5 lg:w-1/5">
      <div className="rounded-lg shadow-lg  min-h-full bg-coolor-2 flex flex-col">
        <div className="relative">
          <div className={metaData[id].isFilled ? "block" : "hidden"}>
            <button
              className="absolute top-auto bg-coolor-2 text-black hover:font-bold m-2 items-center justify-center rounded-full h-6 w-6"
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

        <header className="flex h-32 items-center justify-center p-2 md:p-4">
          <button
            className={isUpdating ? "hidden" : "block"}
            onClick={() => editPrompt(prompt)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current w-4 h-4 mr-2"
              viewBox="0 0 494.936 494.936"
            >
              <path d="M389.844 182.85c-6.743 0-12.21 5.467-12.21 12.21v222.968c0 23.562-19.174 42.735-42.736 42.735H67.157c-23.562 0-42.736-19.174-42.736-42.735V150.285c0-23.562 19.174-42.735 42.736-42.735h267.741c6.743 0 12.21-5.467 12.21-12.21s-5.467-12.21-12.21-12.21H67.157C30.126 83.13 0 113.255 0 150.285v267.743c0 37.029 30.126 67.155 67.157 67.155h267.741c37.03 0 67.156-30.126 67.156-67.155V195.061c0-6.743-5.467-12.211-12.21-12.211z" />
              <path d="M483.876 20.791c-14.72-14.72-38.669-14.714-53.377 0L221.352 229.944c-.28.28-3.434 3.559-4.251 5.396l-28.963 65.069a12.203 12.203 0 0 0 2.521 13.6 12.214 12.214 0 0 0 8.639 3.576c1.675 0 3.362-.346 4.96-1.057l65.07-28.963c1.83-.815 5.114-3.97 5.396-4.25L483.876 74.169c7.131-7.131 11.06-16.61 11.06-26.692 0-10.081-3.929-19.562-11.06-26.686zM466.61 56.897 257.457 266.05c-.035.036-.055.078-.089.107l-33.989 15.131L238.51 247.3c.03-.036.071-.055.107-.09L447.765 38.058c5.038-5.039 13.819-5.033 18.846.005a13.205 13.205 0 0 1 3.905 9.414c0 3.559-1.389 6.903-3.906 9.42z" />
            </svg>
          </button>
          <button
            className={isUpdating ? "block" : "hidden"}
            onClick={acceptPrompt}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </button>
          <h1
            className="text-lg text-center"
            suppressContentEditableWarning={true}
            contentEditable={isUpdating}
            ref={ref}
          >
            {prompt}
          </h1>
          <button
            className={shortStories ? "block" : "hidden"}
            onClick={modalButton}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 pl-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
          </button>
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

export default CardR;
