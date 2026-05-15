import { useDispatch } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
// import { setNameFilter } from "../../redux/filtersSlice";
import { setNameFilter } from "../../redux/filters/slice";
import { useSelector } from "react-redux";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);
  return (
    <div className={css.searchBox}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        value={value}
        type="text"
        onChange={(e) => dispatch(setNameFilter(e.target.value))}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
