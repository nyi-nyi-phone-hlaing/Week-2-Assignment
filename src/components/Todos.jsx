const Todos = ({ todo, error }) => {
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
          {!error && todo && (
            <tr>
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
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
