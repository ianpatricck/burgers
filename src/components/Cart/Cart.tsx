import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../storage/app/hooks";
import { convertAmountToBRL } from "../../helpers/convertAmountToBRL";
import { Cart as CartType } from "../../types/cart/cart";
import { updateQuantity } from "../../storage/features/cart/cartSlice";
import { restaurantDetails } from "../../services/restaurantDetails";

export default function Cart() {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

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
    <div className="cart">
      <div className="cart_wrapper">
        <header className="cart_header">
          <h1 className="cart_header__title">Carrinho</h1>
        </header>

        <main className="cart_main">
          {!cart.length && (
            <span className="cart_main_notfound__message">
              Seu carrinho está vázio
            </span>
          )}

          {cart.map((item, index) => (
            <div
              className={`cart_main_item${item.quantity == 0 ? "--unselected" : ""}`}
              key={index}
            >
              <nav className="cart_main_item_navbar">
                <span className="cart_main_item__name">{item.name}</span>
                <span className="cart_main_item__price">
                  {restaurantDetails.currency}
                  {convertAmountToBRL(item.price)}
                </span>
              </nav>
              <p className="cart_main_item__aditional">
                {item.aditional && `Com ${item.aditional}`}
              </p>
              <div className="cart_main_item_quantity">
                <RemoveCircle
                  className="cart_main_item_quantity__icon"
                  onClick={() =>
                    handleQuantity({ ...item, quantity: item.quantity - 1 })
                  }
                />
                <b className="cart_main_item_quantity__value">
                  {item.quantity}
                </b>
                <AddCircle
                  className="cart_main_item_quantity__icon"
                  onClick={() =>
                    handleQuantity({ ...item, quantity: item.quantity + 1 })
                  }
                />
              </div>
            </div>
          ))}
        </main>

        {cart.length > 0 && (
          <footer className="cart_footer">
            <div className="cart_footer_subtotal">
              <span className="cart_footer_subtotal__field">Sub total</span>
              <span className="cart_footer_subtotal__value">
                {restaurantDetails.currency}
                {convertAmountToBRL(calculateSubTotalPrice())}
              </span>
            </div>
            <div className="cart_footer_total">
              <span className="cart_footer_total__field">Total:</span>
              <span className="cart_footer_total__value">
                {restaurantDetails.currency}
                {convertAmountToBRL(calculateTotalPrice())}
              </span>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}
