import { useDispatch } from "react-redux";
import { selectNameFilter } from "../../redux/selectors";
import { setNameFilter } from "../../redux/filtersSlice";
import { useSelector } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        value={value}
        type="text"
        onChange={(e) => dispatch(setNameFilter(e.target.value))}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
