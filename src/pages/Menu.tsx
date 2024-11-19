import { motion } from "framer-motion";
import SearchBar from "../components/SearchBar/SearchBar";
import Cart from "../components/Cart/Cart";
import Contents from "../layouts/Contents/Contents";
import { useDispatch } from "react-redux";
import { open } from "../storage/features/cart/basketSlice";
import { useAppSelector } from "../storage/app/hooks";

export default function Menu() {
  const cart = useAppSelector((state) => state.cart);

  const dispatch = useDispatch();

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

        {cart.length ? (
          <footer className="menu_footer">
            <button
              className="menu_footer__button"
              type="button"
              onClick={() => dispatch(open())}
            >
              {cart.length > 1
                ? `Your basket • ${cart.length} items`
                : `Your basket • 1 item`}
            </button>
          </footer>
        ) : null}
      </div>
    </motion.div>
  );
}
