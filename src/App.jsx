import Button from './components/Button';
import Category from './components/Category';
import Letter from './components/Letter';
import Settings from './components/Settings';

const App = () => {
  return (
    <>
      <div className="container">
        <i className="fa-icon fa-solid fa-gear"></i>
        <Settings />
        <Category />
        <Letter />
        <Button />
      </div>
    </>
  );
};
export default App;
