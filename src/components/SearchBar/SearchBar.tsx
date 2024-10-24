import { SearchSharp } from "@mui/icons-material";

export default function SearchBar() {
  return (
    <div className="searchbar">
      <SearchSharp className="searchbar__icon" />
      <input className="searchbar__input" type="text" placeholder="Search menu items" maxLength={100} />
    </div>
  );
}
