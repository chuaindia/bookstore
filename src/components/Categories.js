import { useDispatch, useSelector } from 'react-redux';
import { CheckStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);

  return (
    <>
      <h1>{categories}</h1>
      <button className="CheckStatus" type="button" onClick={() => dispatch(CheckStatus())}>Check Status</button>
    </>
  );
};

export default Categories;
