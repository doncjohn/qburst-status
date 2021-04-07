// Context
import { useContext } from 'react';
import statusContext from '../Context/statusContext';

const Header = () => {
  const { subject } = useContext(statusContext);

  return (
    <div className="header">
      <h2 className="header__text">QBS - Qburst Status</h2>
      <p>{subject}</p>
    </div>
  );
};

export default Header;
