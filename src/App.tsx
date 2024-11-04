import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Enter from "./pages/Enter";
import Navbar from "./components/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import Banner from "./components/Banner/Banner";
import ItemModal from "./components/ItemModal/ItemModal";
import { useAppSelector } from "./storage/app/hooks";

export default function App() {
  const itemModal = useAppSelector((state) => state.itemModal);

  return (
    <>
      <Router>
        <Navbar />
        <Banner />

        {itemModal.isVisible && (
          <div
            style={{
              position: "fixed",
              zIndex: 10,
              backgroundColor: "rgba(0, 0, 0, .8)",
              top: 0,
              height: "100%",
              width: "100%",
            }}
          >
            <ItemModal food={itemModal.food} />
          </div>
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
