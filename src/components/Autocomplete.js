"use client"
import Image from "next/image";
// components/Autocomplete.js
import { useState, useEffect, useRef } from "react";
import{coin} from "@/assets/index"

const Autocomplete = ({ options, onSelect }) => {
  const [inputValue, setInputValue] = useState("23.50");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter options based on input value
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredOptions(filtered);
    setIsOpen(true);
  };

  const handleSelectOption = (option) => {
    setInputValue(option);
    setFilteredOptions([]);
    setIsOpen(false);

  };

  const handleMouseDown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="relative ">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className={`w-full px-4 font-bold text-lg  flex items-center py-4 border-b-2  outline-none border-b-gray-400 bg-black text-white placeholder:italic placeholder:text-sm placeholder:font-light ${
            isOpen && filteredOptions.length > 0
              ? "border-b-0 border font-light  border-white bg-[#2B2B2B] text-white"
              : ""
          }`}
          placeholder="Start Typing to search ..."
        />
        <div className="absolute right-4 top-4  flex gap-4">
          <label htmlFor="text-md">BNB</label>
          <Image
            src={coin}
            alt="demo"
            className="h-6 w-6 contain rounded-full "
          />
        </div>
      </div>
      {isOpen && filteredOptions.length > 0 && (
        <ul className="absolute z-10 w-full mt-0 h-[16rem] overflow-scroll bg-black text-white border border-[#E4E4E4] shadow-md pt-4">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer py-4 border-b-gray-400 hover:bg-[#2B2B2B]"
              onClick={() => handleSelectOption(option)}
            >
              <div className="flex justify-between">
                <h3 className="text-sm font-light"> {option}</h3>
                <div className="flex gap-4">
                  <label htmlFor="text-md">BNB</label>
                  <Image
                    src={coin}
                    alt="demo"
                    className="h-6 w-6 contain rounded-full "
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
