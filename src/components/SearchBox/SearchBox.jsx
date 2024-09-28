import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/contactsSlice";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Find contacts by name"
      onChange={handleChange}
    />
  );
}
