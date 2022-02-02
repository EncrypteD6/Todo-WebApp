const ViewTodoList = ({ todo, updateTodo }) => {
  const onClickRemove = (index) => {
    const temp = [...todo];
    temp.splice(index, 1);
    updateTodo(temp);
  };

  return (
    <div>
      <ul>
        {todo.map((item, index) => {
          return (
            <li key={index}>
              {item} <button onClick={() => onClickRemove(index)}>x</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ViewTodoList;
