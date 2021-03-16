import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonComponent from "../../components/button/button.component";
import InputComponent from "../../components/input/input.component";
import MoonComponent from "../../components/moon/moon";
import ParagraphComponent from "../../components/paragraph/paragraph.component";
import { DarkModeHelper } from "../../helpers/dark-mode.helper";
import { globalState, setDarkMode } from "../../redux/slice/global.slice";
import { DESDARA } from "./home.data";

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

  /**
   * change darkmode style and storage darkmode in localstorage
   * @param status
   */
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
          <MoonComponent
            onClick={() => _setDarkMode(!isDarkModel)}
            isDark={isDarkModel}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 dark:text-white sm:space-x-10 text-lg">
          <ParagraphComponent text={DESDARA} className="mb-10" />
          <ParagraphComponent text={DESDARA} />
        </div>

        <InputComponent placeholder="Name" />
        <InputComponent placeholder="Email" />

        <div className="flex flex-row-reverse space-x-3">
          <ButtonComponent
            title="Submit"
            className="ml-2 bg-pink-400 dark:bg-green-400"
          />
          <ButtonComponent
            title="Save"
            className="ml-2 bg-pink-900 dark:bg-purple-600"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
