import "./App.css";

import React, { useState } from "react";

function App() {
  const [blue, setBlue] = useState("");
  const [red, setRed] = useState("");
  const [green, setGreen] = useState("");
  return (
    <div className="App">
      <div className="flex min-h-screen items-center justify-evenly">
        <form>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_first_div"
              id="floating_first_div"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(event) => {
                setBlue(event.target.value);
              }}
              required
            />
            <label
              for="floating_first_div"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Blue Div
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_second_div"
              id="floating_second_div"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(event) => {
                setRed(event.target.value);
              }}
            />
            <label
              for="floating_second_div"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Red Div
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_Third_div"
              id="floating_Third_div"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(event) => {
                setGreen(event.target.value);
              }}
            />
            <label
              for="floating_Third_div"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Green Div
            </label>
          </div>
        </form>
        <div className="flex justify-center items-center min-h-screen relative">
          <div
            className={`border-2 border-blue-600 w-[550px] h-[550px] ${blue}`}
          >
            <div
              className={`border-2 border-red-700 w-[450px] h-[450px] ${red}`}
            >
              <div
                className={`border-2 border-green-800 w-[350px] h-[350px] ${green}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
