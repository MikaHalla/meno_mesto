import { useState } from 'react';
import CategorySvg from './CategorySvg';

const CategoryButton = ({ category }) => {
  const [active, setActive] = useState(true);
  return (
    <div
      className="category-icon"
      onClick={() => setActive(!active)}
      style={active ? { fill: 'black' } : { fill: 'lightgray' }}
    >
      <CategorySvg category={category} />
    </div>
  );
};
export default CategoryButton;
