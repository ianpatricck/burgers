import { SearchSharp } from "@mui/icons-material";

export default function SearchBar() {
  return (
    <div className="searchbar">
      <SearchSharp className="search-icon" />
      <input className="textfield" type="text" placeholder="Search menu items" maxLength={100} />
    </div>
  );
}
