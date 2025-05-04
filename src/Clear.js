import React from "react";
import { confirmAlert } from 'react-confirm-alert';

function Clear({ stateChanger, defaultBoard, boardFile }) {
  const handleButton = () => {
    confirmAlert({
        // title: 'Confirm to submit',
        message: 'Are you sure you want to clear the board?.',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              localStorage.removeItem(boardFile);
              stateChanger(defaultBoard);
              // window.location.reload()        
            }
          },
          {
            label: 'No',
            //onClick: () => alert('Click No')
          }
        ]
      });  
  };

  return (
    <button
      className="bg-coolor-2 text-black font-bold py-2 px-4 rounded mx-4"
      onClick={handleButton}
    >
      Clear the board
      <div className="flex justify-center"></div>
    </button>
  );
}

export default Clear;
