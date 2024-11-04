import { KeyboardArrowUp } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { menuDetails } from "../../services/menuServices";
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch } from "../../storage/app/hooks";
import { show } from "../../storage/features/item-modal/itemModalSlice";
import { MenuSection } from "../../types/api-response/MenuDetails";

type MenuSectionNavigation = MenuSection & { isSelected: boolean };

export default function Contents() {
  const [menuSections, setMenuSections] = useState<MenuSectionNavigation[]>([]);
  const [itemsSectionVisible, setItemsSectionsVisible] = useState<string[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const { sections } = menuDetails;

    const menuSectionsNavigation: MenuSectionNavigation[] = sections.map(
      (sections) => {
        return {
          ...sections,
          isSelected: false,
        };
      },
    );

    menuSectionsNavigation[0].isSelected = true;

    setMenuSections(menuSectionsNavigation);

    let items = menuSectionsNavigation
      .map((item) => (item.isSelected ? item.name.toLowerCase() : ""))
      .filter((item) => item.trim() !== "");

    setItemsSectionsVisible(items);
  }, []);

  function selectTab(tab: string) {
    const cleanedNavbarItems = menuSections.map((item) => {
      item.isSelected = false;
      if (item.name == tab) item.isSelected = true;
      return item;
    });

    setMenuSections(cleanedNavbarItems);

    menuSections.forEach((item) => {
      if (item.isSelected) {
        setItemsSectionsVisible([item.name.toLowerCase()]);
      }
    });
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

  function convertAmountToBRL(amount: number): string {
    return amount.toLocaleString("pt-br", { minimumFractionDigits: 2 });
  }

  return (
    <div className="contents">
      <header className="contents_navbar">
        {menuSections.map((item, index) => (
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
                src={item.images && item.images[0].image}
                alt={item.name}
              />
            </div>

            <span className="contents__text-item">{item.name}</span>
          </motion.nav>
        ))}
      </header>

      <main className="contents_main">
        {menuSections.map((item, item_index) => (
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
                  {food && (
                    <motion.div
                      className="contents_main__item"
                      whileHover={{ cursor: "pointer", scale: 0.97 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => dispatch(show({ isVisible: true, food }))}
                    >
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
                          R${convertAmountToBRL(food.price)}
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
                    </motion.div>
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
