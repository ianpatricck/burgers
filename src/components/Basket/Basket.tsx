import { AddCircle, Close, RemoveCircle } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { close } from "../../storage/features/cart/basketSlice";
import { useAppSelector } from "../../storage/app/hooks";
import { updateQuantity } from "../../storage/features/cart/cartSlice";
import { Cart as CartType } from "../../types/cart/cart";
import { convertAmountToBRL } from "../../helpers/convertAbountToBRL";

export default function Basket() {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();

  function calculateSubTotalPrice(): number {
    let prices = cart.map((item) => item.real_price);
    let subtotal = prices.reduce((acc, currentVal) => acc + currentVal, 0);
    return subtotal;
  }

  function calculateTotalPrice(): number {
    let prices = cart.map((item) => item.price);
    let total = prices.reduce((acc, currentVal) => acc + currentVal, 0);
    return total;
  }

  function handleQuantity(item: CartType): void {
    if (item.quantity >= 0 && item.quantity <= 20) {
      dispatch(updateQuantity(item));
    }
  }

  return (
    <div className="basket">
      <header className="basket_header">
        <h1 className="basket_header__title">Basket</h1>
        <Close
          className="basket_header__close"
          onClick={() => dispatch(close())}
        />
      </header>

      <main className="basket_main">
        {cart.map((item, index) => (
          <div
            className={`basket_main_item${item.quantity == 0 ? "--unselected" : ""}`}
            key={index}
          >
            <nav className="basket_main_item_navbar">
              <span className="basket_main_item__name">{item.name}</span>
              <span className="basket_main_item__price">
                R${convertAmountToBRL(item.price)}
              </span>
            </nav>
            <p className="basket_main_item__aditional">
              {item.aditional && `Com ${item.aditional}`}
            </p>
            <div className="basket_main_item_quantity">
              <RemoveCircle
                className="basket_main_item_quantity__icon"
                onClick={() =>
                  handleQuantity({ ...item, quantity: item.quantity - 1 })
                }
              />
              <b className="basket_main_item_quantity__value">
                {item.quantity}
              </b>
              <AddCircle
                className="basket_main_item_quantity__icon"
                onClick={() =>
                  handleQuantity({ ...item, quantity: item.quantity + 1 })
                }
              />
            </div>
          </div>
        ))}
      </main>

      <footer className="basket_footer">
        <div className="basket_footer_wrapper">
          <div className="basket_footer_subtotal">
            <span className="basket_footer_subtotal__field">Sub total</span>
            <span className="basket_footer_subtotal__value">
              R${convertAmountToBRL(calculateSubTotalPrice())}
            </span>
          </div>
          <div className="basket_footer_total">
            <span className="basket_footer_total__field">Total:</span>
            <span className="basket_footer_total__value">
              R${convertAmountToBRL(calculateTotalPrice())}
            </span>
          </div>
        </div>

        {!cart.length ? (
          <button
            className="basket_footer__button--disable"
            type="button"
            disabled={true}
          >
            Checkout now
          </button>
        ) : (
          <button className="basket_footer__button" type="button">
            Checkout now
          </button>
        )}
      </footer>
    </div>
  );
}
