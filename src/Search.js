import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import { components } from "react-select";
import { config } from "./Constants";
const { Option } = components;

const IconOption = (props) => (
  <Option {...props}>
    <div>
      {/* todo: Change from inline css */}
      <img
        alt=""
        src={props.data.imgLink ? props.data.imgLink : ""}
        style={{
          height: "40px",
          width: "40px",
          // borderRadius: "60%",
          marginRight: "10px",
        }}
      />
      {props.data.title}
    </div>
  </Option>
);

function Search({ id, metaData, stateChanger, returnCover }) {
  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const URL = config.url;

  // handle input change event
  const handleInputChange = (value) => {
    setValue(value);
  };

  // handle selection
  const handleChange = async (value) => {
    setSelectedValue(value);

    const link = value?.imgLink;
    returnCover(link);

    // Fetch alternative covers
    const altCoversResponse = await fetch(`${URL}/altcovers?edition_id=${value?.edition}`);
    const altCovers = await altCoversResponse.json();

    // Create a temporary copy of your items array
    const itemsCopy = metaData.slice();
    // Find the index of the items where the item has the id you want
    const idx = itemsCopy.findIndex((x) => x.id === parseInt(id));
    // Re-assign the item to have the same values as before (name and id), but change the checked to true
    itemsCopy[idx] = {
      ...itemsCopy[idx],
      title: value?.title,
      author: value?.author,
      imgLink: link,
      altCovers: altCovers,
      isFilled: true,
    };

    // Update the state with our modified copy
    stateChanger(itemsCopy);
  };

  // load options using API call
  const loadOptions = (inputValue) => {
    async function fetchSearchResults() {
      const response = await fetch(`${URL}/scrape?search_q=${inputValue}}`);
      const books = await response.json();
      let arr = Object.keys(books).map((k) => books[k]);
      return arr;
    }
    return fetchSearchResults();
  };

  return (
    <div className="">
      <AsyncSelect
        components={{ DropdownIndicator: null, Option: IconOption }}
        cacheOptions
        placeholder={"Search for a book"}
        value={metaData[id].title ? selectedValue : ""}
        getOptionLabel={(e) => e.title}
        getOptionValue={(e) => e.id}
        loadOptions={loadOptions}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
