import React, { useState, useEffect } from "react";
import CardR from "../CardR";
import Clear from "../Clear";
import Info from "../Info";
import Footer from "../Footer";

// B+L Book Bingo 2026 categories, in card order (left to right, top to bottom).
// To change a category, edit its text here and commit. Both cards pick it up
// on the next deploy, unless that square was renamed by hand on the card.
const promptList = [
  "Horror",
  "Judge a Book by its Title",
  "Published in the 80's",
  "Translated",
  "Small Press/Self Published",
  "Unusual Transportation",
  "The Afterlife",
  "Game Changer",
  "Vacation Spot",
  "Villain POV",
  "Older Men",
  "Duology Part 1",
  "Book Club",
  "Published in 2026",
  "Explorer/Ranger",
  "Duology Part 2",
  "One Word Title",
  "Non-Human Protagonist",
  "Partner Pick",
  "First Contact",
  "Murder Mystery",
  "500 Pages Minimum",
  "Feast Your Eyes on This",
  "Politics and Court Intrigue",
  "Historical Fiction",
];

// Browser storage key for this board. Changing it starts everyone on a blank card.
const STORAGE_KEY = "bl2026_data";

function BLBingo2026() {
  const init_board = () =>
    promptList.map((prompt, i) => ({
      id: i,
      imgLink: null,
      title: null,
      author: null,
      starRating: 0,
      hardMode: false,
      isFilled: false,
      prompt: prompt,
    }));

  const [metaData, setMetaData] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (Array.isArray(saved) && saved.length === promptList.length) {
        return saved;
      }
    } catch (e) {}
    return init_board();
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(metaData));
  }, [metaData]);

  const [showInfo, setShowInfo] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("info")) || false;
    } catch (e) {
      return false;
    }
  });
  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(showInfo));
  }, [showInfo]);

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <header className="flex justify-center pb-6">
        <h1 className="text-3xl underline font-bold"> B+L Book Bingo 2026 </h1>
        <button
          className="ml-4 pl-2 bg-coolor-2 rounded-2xl"
          onClick={() => setShowInfo(!showInfo)}
          aria-label="Show tips"
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
          </svg>
        </button>
      </header>
      <div className={showInfo ? "hidden" : "block"}>
        <Info includesShortStory={false} />
      </div>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {promptList.map((prompt, i) => (
          <CardR
            key={i}
            id={String(i)}
            stateChanger={setMetaData}
            metaData={metaData}
            defaultPrompt={prompt}
          />
        ))}
      </div>
      <div className="flex justify-center">
        {/* Export is off until there's a B+L card template image in the backend. */}
        <Clear
          stateChanger={setMetaData}
          defaultBoard={init_board()}
          boardFile={STORAGE_KEY}
        />
      </div>
      <Footer />
    </div>
  );
}

export default BLBingo2026;
