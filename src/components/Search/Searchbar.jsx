import { Modal } from "flowbite-react";
import React, { useState } from "react";
import { SearchIcon } from "../../utils/Emojis/emojis";
import axios from "axios";
import { getSearch } from "../../redux/Actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onClick = () => {
    setShow(true);
    setSearchValue("");
  };

  const onClose = () => {
    setShow(false);
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = async () => {
    try {
      dispatch(getSearch(searchValue))
      navigate("/search")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button
        onClick={onClick}
        className="flex justify-center items-center gap-3 bg-[#f1f1f1] border border-gray-200 rounded-xl py-1 pl-2 pr-2 lg:pl-2 lg:pr-16"
      >
        <SearchIcon />
        <p className="hidden md:block text-sm text-slate-800 ">Buscar...</p>
      </button>
      <Modal show={show} onClose={onClose} className="h-screen">
        <div className="bg-neutral-200 p-3 flex flex-col justify-center items-center gap-3 rounded-lg">
          <div className="w-full flex items-center justify-between px-2">
            <div className="">
              <p className="text-2xl font-bold">En qué estás pensando?</p>
            </div>
            <Modal.Header></Modal.Header>
          </div>
          <div className="container relative left-0 z-50 flex w-full h-auto h-full justify-center items-center gap-3">
            <div className="relative flex items-center w-full h-full group">
              <div className="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                <svg
                  fill="none"
                  className="relative w-5 h-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <svg
                className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
              <input
                type="text"
                className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
                placeholder="Pop, Jazz, Michael Jackson..."
                defaultValue={searchValue}
                onBlur={handleInputChange}
              />
            </div>
            <div>
              <button onClick={handleSearch}>Buscar</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
