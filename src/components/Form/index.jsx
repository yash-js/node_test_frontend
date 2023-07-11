import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import Loader from "../Loader";

const Form = ({ setShowModal }) => {
  const {
    countries,
    loading,
    showList,
    setShowList,
    name,
    setName,
    dob,
    setDob,
    country,
    setCountry,
    setFile,
    suggestions,
    setSuggestions,
    getSuggestions,
    onBlur,
    disabled,
    saveCandidate,
    closeModal,
  } = useForm(setShowModal);
  useEffect(() => {
    if (!country && suggestions.length < 1) setSuggestions(countries);
  }, [suggestions]);

  useEffect(() => {
    setSuggestions(countries);
  }, [countries]);

  return (
    <>
      <form onSubmit={saveCandidate} className="w-full max-w-md">
        <div onFocus={onBlur} className="md:flex md:items-center mb-6 w-full">
          <div className="md:w-1/2">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Full Name
            </label>
          </div>
          <div onFocus={onBlur} className="md:w-full">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />
          </div>
        </div>

        <div onFocus={onBlur} className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-dob"
            >
              Date of Birth
            </label>
          </div>
          <div className="md:w-full">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-dob"
              type="date"
              placeholder="Date of birth"
              onChange={(e) => setDob(e.target.value)}
              value={dob}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6 w-full relative">
          <div className="md:w-1/2">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Country
            </label>
          </div>
          <div className="md:w-full">
            <input
              id="autocompleteInput"
              placeholder="Select Country"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              // onkeyup="onkeyUp(event)"
              onFocus={() => setShowList(true)}
              value={country}
              onChange={getSuggestions}
              autoComplete="off"
            />
            <div
              id="dropdown"
              className={`${
                !showList && "hidden"
              } w-2/3 py-2 min-20 max-h-60 h-auto border border-gray-300 rounded-md bg-white absolute overflow-y-auto `}
            >
              {loading ? (
                <Loader />
              ) : suggestions.length > 0 ? (
                suggestions.map((suggestion) => (
                  <li
                    key={suggestion?.code}
                    onClick={() => {
                      setCountry(suggestion?.name);
                      onBlur();
                    }}
                    className="px-5 py-3 border-b border-gray-200 text-stone-600 cursor-pointer hover:bg-slate-100 transition-colors list-none"
                  >
                    {suggestion?.name}
                  </li>
                ))
              ) : (
                <span>Not Found</span>
              )}
            </div>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Upload
            </label>
          </div>
          <input
            className="block text-sm  cursor-pointer  dark:text-gray-400 focus:outline-none dark:placeholder-gray-400 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-96 py-2 px-4 text-gray-700 leading-tight  focus:bg-white focus:border-purple-500
            "
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            onFocus={onBlur}
          />
        </div>
        <div className="flex items-center justify-end py-3 border-t border-solid border-slate-200 rounded-b">
          {loading && (
            <div>
              <Loader />
            </div>
          )}
          <button
            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(false)}
            disabled={loading}
          >
            Close
          </button>
          <button
            className={` text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${
              disabled
                ? "bg-emerald-300"
                : "bg-emerald-500 active:bg-emerald-600"
            }`}
            type="submit"
            disabled={disabled || loading}
          >
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
