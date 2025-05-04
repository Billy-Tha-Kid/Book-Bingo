import React from "react";

function Info({ includesShortStory }) {
  return (
    <div
      className="flex items-center bg-coolor-2 text-black text-sm font-bold px-4 py-3 rounded"
      role="alert"
    >
      <svg
        className="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
      </svg>
      <ul className="">
        <li>You can search using a book title or author name.</li>
        <li>
          You can give a rating to each book added (or leave the ratings empty)
        </li>
        <li className={includesShortStory ? "block" : "hidden"}>
          For short stories, you can use use the drop down button to include 4 more
          cards. These cards will only show up as a title and author at the
          bottom of the bingo board.
        </li>
        <li>
          This tracker utilizes the storage on your browser, so you'll want to
          access it from the same device each time and make sure you aren't in
          incognito mode.
        </li>
      </ul>
    </div>
  );
}

export default Info;
