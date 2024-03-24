import React from "react";

const Todos = (props) => {
  const { todos } = props;
  return (
    <div className='todos-table'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Complete</th>
          </tr>
        </thead>
        <tbody>
          {todos.length > 0 ? (
            <>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>
                    {todo.completed ? (
                      <p className='com'>Completed</p>
                    ) : (
                      <p className='incom'>Incompleted</p>
                    )}
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <p>No todos avaliable</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
