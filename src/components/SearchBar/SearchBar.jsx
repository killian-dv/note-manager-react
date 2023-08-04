import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ placeholder, onTextChange }) {
  return (
    <>
      <SearchIcon size={25} className={s.icon} />
      <input
        className={s.input}
        type="text"
        placeholder={placeholder}
        onChange={(e) => onTextChange(e.target.value)}
      />
    </>
  );
}
