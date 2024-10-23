import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Enter from "./pages/Enter";
import Navbar from "./components/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import Banner from "./components/Banner/Banner";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Banner />
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
