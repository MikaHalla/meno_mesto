import { useContext } from 'react';
import AppContext from '../context/AppContext';

const Letter = () => {
  const { letter } = useContext(AppContext);
  return <div className="letter">{letter}</div>;
};
export default Letter;
