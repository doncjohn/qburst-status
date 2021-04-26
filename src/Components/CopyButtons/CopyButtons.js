//Components
import Email from './Email';
import Hangout from './Hangout';
import Space from './Space';

const CopyButtons = () => {
  return (
    <div className="copyButtons">
      <Email />
      <Hangout />
      <Space />
    </div>
  );
};

export default CopyButtons;
