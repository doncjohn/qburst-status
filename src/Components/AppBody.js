// Components
import Header from './Header/Header';
import Body from './Body/Body';
import CopyButtons from './CopyButtons/CopyButtons';

const AppBody = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <CopyButtons />
    </div>
  );
};

export default AppBody;
