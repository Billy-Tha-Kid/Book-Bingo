import React, { useState, useEffect } from "react";
import CardR from "../CardR";
import Export from "../Export";
import Clear from "../Clear";
import Info from "../Info";
import Footer from "../Footer";
import Modal from "../Modal";

const promptList = [
  "First in a Series",
  "Alliterative Title",
  "Under the Surface",
  "Criminals",
  "Dreams",
  "Entitled Animals",
  "Bards",
  "Prologues and Epilogues",
  "Self Published / Indie",
  "Romantasy",
  "Dark Academia",
  "Multi POV",
  "Published in 2024",
  "Character with a Disability",
  "Published in the 90s",
  "Orcs, Trolls and Goblins",
  "Space Opera",
  "Author of Color",
  "Survival",
  "Judge a Book by its Cover",
  "Set in a Small Town",
  "Five Short Stories",
  "Eldritch Creatures",
  "Reference Materials",
  "Book Club or Readalong",
];

function RFantasy() {
  const init_board = (m) => {
    const template = {
      id: null,
      imgLink: null,
      title: null,
      author: null,
      starRating: 0,
      hardMode: false,
      isFilled: false,
      prompt: null,
    };

    // Use stringify and parse to copy the values instead of referencing them
    let board_arr = [
      ...Array(m+4)
        .fill(0)
        .map((x) => JSON.parse(JSON.stringify(template))),
    ];

    for (let i = 0; i < m; i++) {
      board_arr[i]["id"] = i;
      board_arr[i]["prompt"] = promptList[i];
    }
    for (let j = 1; j < 5; j++) {
      board_arr[m+j-1]["id"] = m + j - 1;
      board_arr[m+j-1]["prompt"] = "Short Story " + (j+1);
    }

    return board_arr;
  };

  const [metaData, setMetaData] = useState(() => {
    const saved = localStorage.getItem("rfantasy24_data");
    const initialValue = JSON.parse(saved);
    return initialValue || init_board(25);
  });

  useEffect(() => {
    localStorage.setItem("rfantasy24_data", JSON.stringify(metaData));
  }, [metaData]);

  const [showInfo, setShowInfo] = useState(() => {
    const saved = localStorage.getItem("info");
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(showInfo));
  }, [showInfo]);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <header className="flex justify-center pb-6">
        <h1 className="text-3xl underline font-bold">
          {" "}
          r/Fantasy 2024 Book Bingo{" "}
        </h1>
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
        <Info includesShortStory={true} />
      </div>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <CardR
          stateChanger={setMetaData}
          metaData={metaData}
          id="0"
          defaultPrompt={promptList[0]}
        />
        <CardR
          id="1"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[1]}
        />
        <CardR
          id="2"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[2]}
        />
        <CardR
          id="3"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[3]}
        />
        <CardR
          id="4"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[4]}
        />

        <CardR
          id="5"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[5]}
        />
        <CardR
          id="6"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[6]}
        />
        <CardR
          id="7"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[7]}
        />
        <CardR
          id="8"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[8]}
        />
        <CardR
          id="9"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[9]}
        />

        <CardR
          id="10"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[10]}
        />
        <CardR
          id="11"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[11]}
        />
        <CardR
          id="12"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[12]}
        />
        <CardR
          id="13"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[13]}
        />
        <CardR
          id="14"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[14]}
        />

        <CardR
          id="15"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[15]}
        />
        <CardR
          id="16"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[16]}
        />
        <CardR
          id="17"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[17]}
        />
        <CardR
          id="18"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[18]}
        />
        <CardR
          id="19"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[19]}
        />

        <CardR
          id="20"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[20]}
        />
        <CardR
          id="21"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[21]}
          shortStories={true}
          modalButton={toggleModal}
        />
        <CardR
          id="22"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[22]}
        />
        <CardR
          id="23"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[23]}
        />
        <CardR
          id="24"
          stateChanger={setMetaData}
          metaData={metaData}
          defaultPrompt={promptList[24]}
        />
      </div>
      <div>
        <Modal
          stateChanger={setMetaData}
          showModal={showModal}
          metaData={metaData}
          setShowModal={setShowModal}
        />
      </div>

      <div className="flex justify-center">
        <Export metaData={metaData} boardFile="rfantasy" />
        <Clear
          stateChanger={setMetaData}
          defaultBoard={init_board(25)}
          clearData="rfantasy24_data"
        />
      </div>
      <Footer extra={true} />
    </div>
  );
}

export default RFantasy;
