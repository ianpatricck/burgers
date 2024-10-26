import { motion } from "framer-motion";
import SearchBar from "../components/SearchBar/SearchBar";
import Cart from "../components/Cart/Cart";
import Contents from "../layouts/Contents/Contents";

export default function Menu() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="menu">
        <div className="menu_container">
          <div className="menu_container_nav">
            <SearchBar />
          </div>

          <main className="menu_container_content">
            <Contents />
            <Cart />
          </main>
        </div>
      </div>
    </motion.div>
  );
}
