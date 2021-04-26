// Context
import { useContext } from 'react';
import userContext from '../../Context/userContext';

// SVG Import
import { ReactComponent as LogoutSVG } from '../../Styles/svg/logout.svg';

const Header = () => {
  const { subject } = useContext(userContext);

  return (
    <div className="header">
      <h2 className="header__text">QBS - Qburst Status</h2>
      <p>{subject}</p>
      <a href="/">
        <LogoutSVG />
      </a>
    </div>
  );
};

export default Header;
