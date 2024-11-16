import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Enter from "./pages/Enter";
import Navbar from "./components/Navbar/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Banner from "./components/Banner/Banner";
import ItemModal from "./components/ItemModal/ItemModal";
import { useAppSelector } from "./storage/app/hooks";
import Basket from "./components/Basket/Basket";

export default function App() {
  const itemModal = useAppSelector((state) => state.itemModal);

  return (
    <>
      <Router>
        <Navbar />
        <Banner />

        <Basket />

        {itemModal.isVisible && (
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="item-modal_container"
          >
            <ItemModal isVisible={itemModal.isVisible} food={itemModal.food} />
          </motion.div>
        )}

        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/enter" element={<Enter />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </>
  );
}
