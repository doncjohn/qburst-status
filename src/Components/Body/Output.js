// Context
import { useContext } from 'react';
import userContext from '../../Context/userContext';

const Output = () => {
  const { output } = useContext(userContext);
  return (
    <div className="output">
      <p className="output__title">Output</p>
      <pre>{output}</pre>
    </div>
  );
};

export default Output;
