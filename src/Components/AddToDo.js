const AddToDo = () => {
  const onClick = () => {
    console.log('AddToDo');
  };
  return (
    <div>
      <input type="text" placeholder="Add New To Do" />
      <button onClick={onClick}>Add</button>
    </div>
  );
};

export default AddToDo;
