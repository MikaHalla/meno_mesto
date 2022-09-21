import { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import CategorySvg from './CategorySvg';

const CategoryButton = ({ category }) => {
  const [active, setActive] = useState(true);
  const { tgCategory } = useContext(AppContext);

  const handleClick = (category) => {
    setActive(!active);
    tgCategory(category);
  };

  return (
    <div
      className="category-icon"
      onClick={() => handleClick(category)}
      style={active ? { fill: 'black' } : { fill: 'lightgray' }}
    >
      <CategorySvg category={category} />
    </div>
  );
};
export default CategoryButton;
