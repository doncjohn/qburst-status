const ToDoList = () => {
  const onClick = () => {
    console.log('Remove ToDoList Item');
  };
  const toDoListItems = ['Sample ToDoList 1', 'Sample ToDoList 2'];
  return (
    <ul>
      {toDoListItems.map(todo => {
        return (
          <li key={todo}>
            {todo}
            <button onClick={onClick}>x</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
