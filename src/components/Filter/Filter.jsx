import css from './filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from 'store/filter/filterSelector';
import { filterValue } from 'store/filter/filterSlice';

const Filter = () => {
  const { filter } = useSelector(filterSelector);
  const dispatch = useDispatch();

 const handleFilter = ({ target }) => {
   dispatch(filterValue(target.value));
 };

  return (
    <div className={css.inputContainer}>
      <input
        type="text"
        name="filter"
        className={css.input}
        value={filter}
        onChange={handleFilter}
        placeholder="Write name"
      />
    </div>
  );
};

export default Filter;

