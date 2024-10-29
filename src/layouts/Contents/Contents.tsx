import { KeyboardArrowUp } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { MenuDetails } from "./types/MenuDetails";
import { menuDetails } from "../../services/menuServices";
import { motion, AnimatePresence } from "framer-motion";

export default function Contents() {
  const [menuItems, setMenuItems] = useState<MenuDetails[]>([]);
  const [itemsSectionVisible, setItemsSectionsVisible] = useState<string[]>([]);

  useEffect(() => {
    const { sections } = menuDetails;

    const details = sections.map((details) => {
      return {
        name: details.name,
        image: details.images[0].image,
        isSelected: details.name.toLowerCase() == "burgers" ? true : false,
        items: details.items,
      };
    });

    setMenuItems(details);

    let items = details.map((item) =>
      item.isSelected ? item.name.toLowerCase() : "",
    );

    items = items.filter((item) => item.trim() !== "");

    setItemsSectionsVisible(items);
  }, []);

  function selectTab(tab: string) {
    const cleanedNavbarItems = menuItems.map((item) => {
      item.isSelected = false;
      if (item.name == tab) item.isSelected = true;
      return item;
    });

    setMenuItems(cleanedNavbarItems);
  }

  function toggleItem(itemName: string) {
    if (!itemsSectionVisible.includes(itemName)) {
      setItemsSectionsVisible([...itemsSectionVisible, itemName]);
      return;
    }

    setItemsSectionsVisible(
      itemsSectionVisible.filter((item) => item !== itemName),
    );
  }

  return (
    <div className="contents">
      <header className="contents_navbar">
        {menuItems.map((item, index) => (
          <motion.nav
            className={`contents_navbar__nav-item${item.isSelected ? "--selected" : ""}`}
            key={index}
            onClick={() => selectTab(item.name)}
            whileTap={{ scale: 1.1 }}
          >
            <div
              className={`contents_navbar__nav-item_image-wrapper${item.isSelected ? "--selected" : ""}`}
            >
              <img
                className="contents__image-item"
                src={item.image}
                alt={item.name}
              />
            </div>

            <span className="contents__text-item">{item.name}</span>
          </motion.nav>
        ))}
      </header>

      <main className="contents_main">
        {menuItems.map((item, item_index) => (
          <section className="contents_main_items" key={item_index}>
            <nav
              className="contents_main_items_nav"
              onClick={() => toggleItem(item.name.toLowerCase())}
            >
              <h1 className="contents_main_items__title">{item.name}</h1>
              <KeyboardArrowUp
                className={`contents_main_items__icon${itemsSectionVisible.includes(item.name.toLowerCase()) ? "--open" : "--closed"}`}
              />
            </nav>

            <AnimatePresence>
              {item.items.map((food, food_index) => (
                <motion.div
                  className="contents_main_items_wrapper"
                  key={food_index}
                  variants={{
                    open: {
                      opacity: 1,
                    },
                    closed: {
                      opacity: 0,
                      marginTop: -40,
                      display: "none",
                    },
                  }}
                  initial={{ opacity: 1, y: 0 }}
                  animate={
                    itemsSectionVisible.includes(item.name.toLowerCase())
                      ? "open"
                      : "closed"
                  }
                  transition={{ duration: 0.1 }}
                  exit={{ opacity: 0 }}
                >
                  {1 == 1 && (
                    <>
                      <div className="contents_main_items__info">
                        <h1 className="contents_main_items__name">
                          {food.name}
                        </h1>
                        <p className="contents_main_items__description">
                          {food.description
                            ? food.description
                            : "Sem descrição provida"}
                        </p>
                        <span className="contents_main_items__price">
                          R${food.price}
                        </span>
                      </div>

                      <div className="contents_main_items__image-wrapper">
                        {food.images ? (
                          <img
                            className="contents_main_items__image"
                            src={food.images[0].image}
                            alt={food.name}
                          />
                        ) : null}
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </section>
        ))}
      </main>
    </div>
  );
}
