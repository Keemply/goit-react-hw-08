import { useDispatch, useSelector } from "react-redux";
import { setSearchFilter } from "../../redux/filters/filtersSlice";

function SearchBox() {
  const filter = useSelector((state) => state.filters.search);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setSearchFilter(e.target.value));
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
}
export default SearchBox;
