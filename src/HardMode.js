import React from "react";

const HardMode = ({ stateChanger, metaData, id, hm }) => {
  const handleChange = () => {
    // Create a temporary copy of your items array
    const itemsCopy = metaData.slice();
    // Find the index of the items where the item has the id you want
    const idx = itemsCopy.findIndex((x) => x.id === parseInt(id));
    // Re-assign the item to have the same values as before (name and id), but change the checked to true
    itemsCopy[idx] = { ...itemsCopy[idx], hardMode: !metaData[id].hardMode };

    // Update the state with our modified copy
    stateChanger(itemsCopy);
  };

  return (
    <div className="flex justify-center text-2xl">
      <label className="relative inline-flex items-center mr-5 cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={handleChange}
          checked={hm ? true : false}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
        <span className="ml-3 text-sm font-medium text-gray-900">
          Hard Mode
        </span>
      </label>
    </div>
  );
};

export default HardMode;
