import React, { useState } from "react";

const Todos = () => {
  const [toDo, setToDo] = useState("");

  const onChangeHandler = (e) => {
    setToDo(e.target.value);
    console.log("fff", toDo);
  };

  return (
    <div className="bg-gray-100 h-screen w-full flex items-center justify-center font-sans">
      <div className="bg-white rounded shadow-lg p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-gray-500 text-xl font-semibold flex items-center justify-center ">
            Todo List
          </h1>
          <form>
            <div className="flex mt-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-black"
                placeholder="Write yout to do"
                value={toDo}
                onChange={onChangeHandler}
              />
              <button className="flex-no-shrink  p-2  border-blue-500 border-2 rounded text-blue-500  hover:text-white hover:bg-blue-500">
                Add
              </button>
            </div>
          </form>
        </div>
        <div>
          <div className="flex mb-4 items-center">
            <p className="w-full text-black ml-2">방 치우기</p>
            <button className="flex-no-shrink  p-2 ml-2 border-green-500 border-2 rounded text-green-500  hover:text-white hover:bg-green-500">
              Done
            </button>
            <button className="flex-no-shrink p-2 ml-2 border-red-500 border-2 rounded text-red-500 hover:text-white hover:bg-red-500">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
