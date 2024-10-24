import { motion } from "framer-motion";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Menu() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="menu">
        <div className="container">
          <SearchBar />
        </div>
      </div>
    </motion.div>
  );
}
