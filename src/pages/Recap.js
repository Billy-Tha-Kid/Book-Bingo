import React, { useState, useEffect } from "react";
import Select from "react-select";
import { config } from "../Constants";

function Recap() {
  const yearOptions = [
    { value: "0", label: "All-time" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2019", label: "2019" },
    { value: "2018", label: "2018" },
    { value: "2017", label: "2017" },
    { value: "2016", label: "2016" },
    { value: "2015", label: "2015" },
    { value: "2014", label: "2014" },
  ];
  const monthOptions = [
    { value: "", label: "All-months" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
  ];
  const [showInfo] = useState(() => {
    const saved = localStorage.getItem("info");
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(showInfo));
  }, [showInfo]);

  // Input fields
  const [username, setUsername] = useState('');
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [isDisabled, setDisabled] = useState(false);
  const handleYearSelect = (selectedOption) => {
    setDisabled(selectedOption.value === "0");
	setSelectedYear(selectedOption.value);
  };
  const handleMonthSelect = (selectedOption) => {
	setSelectedMonth(selectedOption.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Generate the recap
  const [isLoading, setIsLoading] = useState(false);
  const URL = config.tsgUrl;
const handleSubmit = async () => {
    setIsLoading(true);
    const response = await fetch(`${URL}/user/stats?userId=${username}&year=${selectedYear}&month=${!isDisabled ? selectedMonth : ''}`, {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    });
	if (!await response.ok) {
		// TODO: throw error and show modal
		console.log('Failed to fetch image');
		setIsLoading(false);
		return;
	}
    const img = await response.blob();
    let url = window.URL.createObjectURL(img);
    let a = document.createElement("a");
    a.href = url;
    a.download = `${selectedYear}-${selectedMonth}-recap.png`;
    a.click();
    setIsLoading(false);
  };

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <header className="flex justify-center pb-6">
        <h1 className="text-3xl underline font-bold"> Book Recap </h1>
      </header>
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
        <ul>
          <li>Currently, only The StoryGraph is supported.</li>
          <li>You can find your username by going to your profile.</li>
        </ul>
      </div>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <div className="my-3 px-4 w-full">
          <div className="rounded-lg shadow-lg min-h-full bg-coolor-2">
            <h1 className="text-lg text-center mb-4">
              Please type your usename and the dates you want to show
            </h1>
            <div className="flex">
              <div className="w-1/3">
                <input
                  type="text"
                  className="h-[calc(100%)] w-[calc(100%-0.25rem)] ml-0.5  mt-[0.5px]
				pl-2 rounded"
                  placeholder="Username"
				  onChange={handleUsernameChange}
                />
              </div>
              <div className="w-1/3">
                <Select
                  options={yearOptions}
                  onChange={handleYearSelect}
                  placeholder="Year"
                />
              </div>
              <div className="w-1/3">
                <Select
                  options={monthOptions}
				  onChange={handleMonthSelect}
                  isDisabled={isDisabled}
                  placeholder="Month"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
	  <button
      className="bg-coolor-2 text-black font-bold py-2 px-4 rounded mx-4 flex"
      onClick={handleSubmit}
      disabled={isLoading}
    >
      Generate the recap
      <svg
        aria-hidden="true"
        className={
          isLoading
            ? "w-8 h-8 mr-2 text-coolor-2 animate-spin fill-black"
            : "hidden"
        }
        viewBox="0 0 100 101"
        fill="none"
      >
        {" "}
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    </button>
      </div>
    </div>
  );
}

export default Recap;
