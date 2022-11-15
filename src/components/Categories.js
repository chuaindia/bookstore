import { useDispatch, useSelector } from 'react-redux';
import { addCategories } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);

  return (
    <>
      <h1>{categories}</h1>
      <button className="Check-Status" type="button" onClick={() => dispatch(addCategories())}> </button>
    </>
  );
};

export default Categories;
