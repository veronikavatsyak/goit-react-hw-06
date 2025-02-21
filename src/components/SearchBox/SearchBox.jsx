import { useId } from "react";
import s from "./SearchBox.module.css";
const SearchBox = ({ setSearchQuery }) => {
  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };
  const searchId = useId();
  return (
    <div>
      <label id={searchId}>Find contacts by name </label>
      <input
        className={s.input}
        id={searchId}
        onChange={handleSearchQuery}
        type="text"
        name="find"
      ></input>
    </div>
  );
};

export default SearchBox;
