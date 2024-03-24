import { useState } from "react";

const GetTodo = ({ specifiedTodo, isError }) => {
  const [id, setId] = useState("");

  const getTodo = async (e) => {
    e.preventDefault();
    if (id < 1 || id > 200) {
      isError(true);
      setId("");
      return;
    }
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    const data = await response.json();
    specifiedTodo(data);
    isError(false);
    setId("");
  };
  return (
    <div className='get-todo'>
      <form onSubmit={getTodo}>
        <input
          type='number'
          placeholder='Between 1 to 200'
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type='submit'>Get Todo</button>
      </form>
    </div>
  );
};

export default GetTodo;
