import { useDispatch, useSelector } from 'react-redux';
import { CheckStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);

  return (
    <>
      <h1>{categories}</h1>
      <button className="Check-Status" type="button" onClick={() => dispatch(CheckStatus())}> </button>
    </>
  );
};

export default Categories;
