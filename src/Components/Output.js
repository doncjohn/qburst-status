// Context
import { useContext } from 'react';
import statusContext from '../Context/statusContext';

const Output = () => {
  const { email, hangout, space, button } = useContext(statusContext);

  return (
    <div className="output">
      <p className="output__title">Output</p>
      {!button && <pre>Click on a button to view the output.</pre>}
      {button === 'email' && <pre>{email}</pre>}
      {button === 'hangout' && <pre>{hangout}</pre>}
      {button === 'space' && <pre>{space}</pre>}
    </div>
  );
};

export default Output;
