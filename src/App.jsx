import Button from './components/Button';
import Category from './components/Category';
import FaIcon from './components/FaIcon';
import Letter from './components/Letter';
import ScoreBoard from './components/ScoreBoard';
import Settings from './components/Settings';

const App = () => {
  return (
    <>
      <div className="container">
        <Settings />
        <FaIcon />
        <Category />
        <Letter />
        <ScoreBoard />
        <Button />
      </div>
    </>
  );
};
export default App;
