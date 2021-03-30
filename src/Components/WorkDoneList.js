const WorkDoneList = () => {
  const onClick = () => {
    console.log('Remove WorkDoneList Item');
  };
  const WorkDoneListItems = ['Sample WorkDone 1', 'Sample WorkDone 2'];
  return (
    <ul>
      {WorkDoneListItems.map(work => {
        return (
          <li key={work}>
            {work}
            <button onClick={onClick}>x</button>
          </li>
        );
      })}
    </ul>
  );
};

export default WorkDoneList;
