import { useContext } from 'react';
import AppContext from '../context/AppContext';
import CategorySvg from './CategorySvg';

const Category = () => {
  const { category } = useContext(AppContext);
  return (
    <div className={`category ${category}`}>
      <CategorySvg category={category} />
    </div>
  );
};
export default Category;
