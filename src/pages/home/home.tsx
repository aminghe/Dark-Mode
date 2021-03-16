import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoonComponent from "../../components/moon";
import { DarkModeHelper } from "../../helpers/dark-mode.helper";
import { globalState, setDarkMode } from "../../redux/slice/global.slice";

const HomePage = () => {
  /**
   * class object
   */
  const _darkModeHelper = new DarkModeHelper();
  /**
   * selector
   */
  const { isDarkModel } = useSelector(globalState);
  /**
   * dispatch
   */
  const dispatch = useDispatch();

  /**
   * check status dark-mode
   */
  useEffect(() => {
    _setDarkMode(_darkModeHelper.status());
  }, []);

  const changeDarkModel = () => {
    _setDarkMode(!isDarkModel);
  };

  const _setDarkMode = (status: boolean) => {
    _darkModeHelper.darkMode(status);
    dispatch(setDarkMode(status));
  };

  return (
    <>
      <div className="container pt-20 mx-auto space-y-5">
        <div className="flex  justify-between">
          <h1 className="text-black text-4xl dark:text-purple-800 font-bold">
            Dark Mode Challenge
          </h1>
          <MoonComponent onClick={changeDarkModel} isDark={isDarkModel} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 dark:text-white sm:space-x-10 text-lg">
          <p className="mb-10">
            Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
          <p>
            Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>

        <input
          className="dark:bg-gray-600 dark:placeholder-gray-100 dark:text-gray-100 shadow rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Name"
        />
        <input
          className="dark:bg-gray-600 dark:placeholder-gray-100 dark:text-gray-100 shadow rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Email"
        />

        <div className="flex flex-row-reverse space-x-3">
          <button className="pl-10 pr-10 bg-pink-400 dark:bg-green-400 hover:bg-green-700 text-white font-bold py-2 ml-2 px-4 rounded">
            Submit
          </button>
          <button className="pl-10 pr-10 bg-pink-900 dark:bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
            Save
          </button>
        </div>
        {/* 
    <h2 className="text-black dark:text-white">Dark Mode Challenge</h2>





        <div className="bg-white dark:bg-black">
          <p className="text-black dark:text-white">
            My eyes are grateful.
            <p className="text-blue-300 hover:text-blue-400 dark:text-blue-700 dark-hover:text-blue-600">
              Learn more
            </p>
          </p>
        </div>

        <button
          onClick={changeDarkModel}
          className="lg:dark:hover:bg-white border bg-green mb-10 p-10"
        >
          change darkmode
        </button>
        <div className="text-blue-500">
          {isDarkModel === true ? "darkModel" : "lightModel"}
        </div>

        <div className="bg-white dark:bg-gray-800">
          <h1 className="text-gray-900 dark:text-white">Dark mode is here!</h1>
          <p className="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
        </div>*/}
      </div>
    </>
  );
};

export default HomePage;
