import { useState } from "react";
import GetTodo from "../components/GetTodo";
import Todos from "../components/Todos";

const Main = () => {
  const [todo, setTodo] = useState(undefined);
  const [error, setError] = useState(false);

  const specifiedTodo = (specTodo) => {
    setTodo(specTodo);
  };

  const isError = (err) => {
    setError(err);
  };

  return (
    <section className='Main'>
      <Todos todo={todo} error={error} />
      {error && <h1>Please enter a valid id. (expample 1,2,3,etc...)</h1>}
      <GetTodo specifiedTodo={specifiedTodo} isError={isError} />
    </section>
  );
};

export default Main;
