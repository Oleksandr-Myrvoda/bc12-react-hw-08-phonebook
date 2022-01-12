import { useDispatch, useSelector } from "react-redux";
import styles from "./Filter.module.css";

import { filterContact, getFilter } from "../../redux";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = (e) => dispatch(filterContact(e.target.value));

  return (
    <div className={styles.filter}>
      <label>
        <p className={styles.title}>Filter</p>
        <input type="text" value={filter} onChange={changeFilter} />
      </label>
    </div>
  );
};

export default Filter;
