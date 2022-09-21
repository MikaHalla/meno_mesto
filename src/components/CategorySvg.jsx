import Animal from '../svg/Animal';
import BoyName from '../svg/BoyName';
import City from '../svg/City';
import Clothing from '../svg/Clothing';
import Food from '../svg/Food';
import GirlName from '../svg/GirlName';
import Item from '../svg/Item';
import Occupation from '../svg/Occupation';
import Plant from '../svg/Plant';
import Sport from '../svg/Sport';
import World from '../svg/World';
import BodyPart from '../svg/BodyPart';

const CategorySvg = ({ category }) => {
  return (
    <>
      {(category === 'animal' && <Animal />) ||
        (category === 'boyName' && <BoyName />) ||
        (category === 'city' && <City />) ||
        (category === 'clothing' && <Clothing />) ||
        (category === 'food' && <Food />) ||
        (category === 'girlName' && <GirlName />) ||
        (category === 'item' && <Item />) ||
        (category === 'occupation' && <Occupation />) ||
        (category === 'plant' && <Plant />) ||
        (category === 'sport' && <Sport />) ||
        (category === 'world' && <World />) ||
        (category === 'bodyPart' && <BodyPart />)}
    </>
  );
};
export default CategorySvg;
