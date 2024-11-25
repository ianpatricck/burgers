import { SearchSharp } from "@mui/icons-material";
import { menuDetails } from "../../services/menuServices";
import { useState } from "react";
import { SectionItem } from "../../types/api-response/MenuDetails";
import { convertAmountToBRL } from "../../helpers/convertAmountToBRL";
import { restaurantDetails } from "../../services/restaurantDetails";

export default function SearchBar() {
  const [foundItems, setFoundItems] = useState<SectionItem[]>([]);

  function findAllItems() {
    const { sections } = menuDetails;
    return sections.map((field) => field.items).flat();
  }

  function searchItemByName(name: string) {
    if (name.trim() !== "") {
      const allItems = findAllItems();

      const items = allItems.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase()),
      );

      setFoundItems(items);
    } else {
      setFoundItems([]);
    }
  }

  return (
    <div data-testid="searchbar" className="searchbar">
      <div className="searchbar_field">
        <SearchSharp className="searchbar__icon" />
        <input
          className="searchbar__input"
          type="text"
          placeholder="Search menu items"
          maxLength={100}
          onChange={(e) => searchItemByName(e.target.value)}
        />
      </div>
      {foundItems.length ? (
        <div className="searchbar_content">
          {foundItems.map((item, index) => (
            <div className="searchbar_content__item" key={index}>
              <div className="searchbar_content__image">
                {item.images ? (
                  <img src={item.images[0].image} alt="test" />
                ) : (
                  <div className="searchbar_content__image--404"></div>
                )}
              </div>
              <aside className="searchbar_content__info">
                <h1>{item.name}</h1>
                <p>
                  {item.description
                    ? item.description
                    : "Sem descrição provida"}
                </p>
                <span>
                  {restaurantDetails.currency}
                  {convertAmountToBRL(item.price)}
                </span>
              </aside>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
