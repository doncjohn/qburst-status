const AddWorkDone = () => {
  const onClick = () => {
    console.log('AddWorkDone');
  };
  return (
    <div>
      <input type="text" placeholder="Add New Work Done" />
      <button onClick={onClick}>Add</button>
    </div>
  );
};

export default AddWorkDone;
