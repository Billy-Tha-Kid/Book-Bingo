import React from "react";
import CardR from "./CardR";

function Modal({ stateChanger, metaData, showModal }) {

  return (
    <>
      {showModal ? (
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <CardR
            stateChanger={stateChanger}
            metaData={metaData}
            id="25"
            defaultPrompt={"Short Story 2"}
          />
          <CardR
            stateChanger={stateChanger}
            metaData={metaData}
            id="26"
            defaultPrompt={"Short Story 3"}
          />
          <CardR
            stateChanger={stateChanger}
            metaData={metaData}
            id="27"
            defaultPrompt={"Short Story 4"}
          />
          <CardR
            stateChanger={stateChanger}
            metaData={metaData}
            id="28"
            defaultPrompt={"Short Story 5"}
          />
        </div>
      ) : null}
    </>
  );
}

export default Modal;
