import React, { useState } from "react";

const Todos = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChangeHandler = (e) => {
    setToDo(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }

    setToDos((currnetArray) => [toDo, ...currnetArray]);
    setToDo("");
  };

  const RemoveTodo = (index) => {
    const newToDos = [...toDos];
    newToDos.splice(index, 1);
    setToDos(newToDos);
  };

  return (
    <div className="bg-gray-100 h-screen w-full flex items-center justify-center font-sans">
      <div className="bg-white rounded shadow-lg p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-gray-500 text-xl font-semibold flex items-center justify-center ">
            Todo List ({toDos.length})
          </h1>
          <form onSubmit={onSubmitHandler}>
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
          {toDos.map((value, index) => (
            <div className="flex mb-4 items-center" key={index}>
              <p
                className="w-full text-black ml-2"
                style={{ textDecoration: value.isDone ? "line-through" : "" }}
              >
                {index + 1}. {value}
              </p>

              <button
                className="flex-no-shrink p-2 ml-2 border-red-500 border-2 rounded text-red-500 hover:text-white hover:bg-red-500"
                onClick={RemoveTodo}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todos;
