import { useEffect, useState } from "react";
import Todos from "../components/Todos";

const Main = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTodos(data);
  };
  return (
    <section className='Main'>
      <Todos todos={todos} />
    </section>
  );
};

export default Main;
