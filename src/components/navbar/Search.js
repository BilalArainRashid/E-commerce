import { useState } from 'react';
import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { BsSearch } from "react-icons/bs";


function Search( props) {
  const [searchText, setSearchText] = useState("");
  const [showSearchBox, setShowSearchBox] = useState(true);

 

  const handleCloseSearch = (event) => {
    if (event.target.tagName !== "INPUT" && event.target.tagName !== "BUTTON") {
      setShowSearchBox(false);
      props.search(false)
    }
  };
  return (
    <div className="">
      
      {showSearchBox && (
        <div
          onClick={handleCloseSearch}
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
        >
          <div className="bg-white w-9/12 mb-72 p-2 rounded-lg">
            <div className=" relative  ">
              <input
                type="text"
                id=""
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                class=" w-full p-2 outline-none"
                placeholder="Search"
                required
              />
              {searchText.length > 0 && (
                <button
                  className="absolute border-
                    2 w-full top-0 left-0 mt-9 mr-2 bg-white  -red-700 hover:text-red-600 outline-none py-2 px-3 text-lg text-left "
                >
                  show more
                </button>
              )}
              <button
                type="submit"
                class="absolute text-3xl inset-y-2 right-3 flex  pointer-events-none"
              >
                <IoIosSearch />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search