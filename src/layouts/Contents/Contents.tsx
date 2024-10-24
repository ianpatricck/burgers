import { useState } from "react";

export default function Contents() {
  const [navbarItems, setNavbarItems] = useState([
    {
      name: "Burgers",
      src: "https://preodemo.gumlet.io/usr/venue/7602/section/646fbe4c64a6f.png",
      isSelected: true,
    },

    {
      name: "Drinks",
      src: "https://preodemo.gumlet.io/usr/venue/7602/section/646fbe5dc1bf3.png",
      isSelected: false,
    },
    {
      name: "Desserts",
      src: "https://preodemo.gumlet.io/usr/venue/7602/section/646fbe93cb615.png",
      isSelected: false,
    },
  ]);

  function selectTab(tab: string) {
    const cleanedNavbarItems = navbarItems.map((item) => {
      item.isSelected = false;

      if (item.name == tab) item.isSelected = true;

      return item;
    });

    setNavbarItems(cleanedNavbarItems);
  }

  return (
    <div className="contents">
      <header className="contents_navbar">
        {navbarItems.map((item, index) => (
          <nav
            className={`contents_navbar__nav-item${item.isSelected ? "--selected" : ""}`}
            key={index}
            onClick={() => selectTab(item.name)}
          >
            <div
              className={`contents_navbar__nav-item_image-wrapper${item.isSelected ? "--selected" : ""}`}
            >
              <img
                className="contents__image-item"
                src={item.src}
                alt={item.name}
              />
            </div>

            <span className="contents__text-item">{item.name}</span>
          </nav>
        ))}
      </header>

      <main>
        <section>
          <h1>Burgers</h1>
        </section>

        <section>
          <h1>Drinks</h1>
        </section>

        <section>
          <h1>Desserts</h1>
        </section>
      </main>
    </div>
  );
}
