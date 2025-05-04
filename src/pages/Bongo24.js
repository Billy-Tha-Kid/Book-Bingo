import React, { useState, useEffect } from "react";
import Card from "../Card";
import Export from "../Export";
import Clear from "../Clear";
import Info from "../Info";
import Footer from "../Footer";

function Bongo24() {
  const init_board = (m) => {
    const template = {
      id: null,
      imgLink: null,
      title: null,
      starRating: 0,
      isFilled: false,
    };

    // Use stringify and parse to copy the values instead of referencing them
    let board_arr = [
      ...Array(m)
        .fill(0)
        .map((x) => JSON.parse(JSON.stringify(template))),
    ];

    for (let i = 0; i < m; i++) {
      board_arr[i]["id"] = i;
    }
    return board_arr;
  };

  const [metaData, setMetaData] = useState(() => {
    const saved = localStorage.getItem("bongo24_data");
    const initialValue = JSON.parse(saved);
    return initialValue || init_board(25);
  });

  useEffect(() => {
    localStorage.setItem("bongo24_data", JSON.stringify(metaData));
  }, [metaData]);

  const [showInfo, setShowInfo] = useState(() => {
    const saved = localStorage.getItem("info");
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(showInfo));
  }, [showInfo]);

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <header className="flex justify-center pb-6">
        <h1 className="text-3xl underline font-bold"> Chaos Bongo </h1>
        <button
          className="ml-4 pl-2 bg-coolor-2 rounded-2xl"
          onClick={() => setShowInfo(!showInfo)}
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
        <Info />
      </div>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <Card
          stateChanger={setMetaData}
          metaData={metaData}
          id="0"
          prompt="Read in the bath"
        />
        <Card
          id="1"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Hooves"
        />
        <Card
          id="2"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Ugly cry"
        />
        <Card
          id="3"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="A river enchanted / Learn Estonian"
        />
        <Card
          id="4"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="As complicated as Shadow of the Torturer"
        />

        <Card
          id="5"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Someone who loves cats"
        />
        <Card
          id="6"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Bannable"
        />
        <Card
          id="7"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Features rollercoasters"
        />
        <Card
          id="8"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Mistake buddy read / Wrong assumption"
        />
        <Card
          id="9"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="X-Files"
        />

        <Card
          id="10"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Hot fan art / Cool cover"
        />
        <Card
          id="11"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Skills for book commune"
        />
        <Card
          id="12"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Any 2024 BOTM you finished within 24hrs of the chat"
        />
        <Card
          id="13"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="When women were dragons"
        />
        <Card
          id="14"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Oldest current-read"
        />

        <Card
          id="15"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Confusing romance plot"
        />
        <Card
          id="16"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Saves you from being haunted"
        />
        <Card
          id="17"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Very long series"
        />
        <Card
          id="18"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Starts with 'P' and has Mosscap"
        />
        <Card
          id="19"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Multiple club members won't shut up about"
        />

        <Card
          id="20"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Song of Achilles"
        />
        <Card
          id="21"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Associated with other club members"
        />
        <Card
          id="22"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="New author who's another member's favorite"
        />
        <Card
          id="23"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Comfort book that's not comfy at all"
        />
        <Card
          id="24"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Known for starting fights"
        />
      </div>
      <div className="flex justify-center">
        <Export metaData={metaData} boardFile={"bongo24"} />
        <Clear stateChanger={setMetaData} defaultBoard={init_board(25)} clearData="bongo24_data"/>
      </div>
      <Footer extra={false} />
    </div>
  );
}

export default Bongo24;
