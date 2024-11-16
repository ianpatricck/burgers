import { AddCircle, Close, RemoveCircle } from "@mui/icons-material";

export default function Basket() {
  return (
    <div className="basket">
      <header className="basket_header">
        <h1 className="basket_header__title">Basket</h1>
        <Close className="basket_header__close" />
      </header>

      <main className="basket_main">
        <div className="basket_main_item">
          <nav className="basket_main_item_navbar">
            <span className="basket_main_item__name">Smash Brooks</span>
            <span className="basket_main_item__price">R$35,00</span>
          </nav>
          <p className="basket_main_item__aditional">2 meats (+R$35,00)</p>
          <div className="basket_main_item_quantity">
            <RemoveCircle className="basket_main_item_quantity__icon" />
            <b className="basket_main_item_quantity__value">1</b>
            <AddCircle className="basket_main_item_quantity__icon" />
          </div>
        </div>
        <div className="basket_main_item">
          <nav className="basket_main_item_navbar">
            <span className="basket_main_item__name">Capirinha</span>
            <span className="basket_main_item__price">R$13,00</span>
          </nav>
          <p className="basket_main_item__aditional"></p>
          <div className="basket_main_item_quantity">
            <RemoveCircle className="basket_main_item_quantity__icon" />
            <b className="basket_main_item_quantity__value">1</b>
            <AddCircle className="basket_main_item_quantity__icon" />
          </div>
        </div>
      </main>

      <footer className="basket_footer">
        <div className="basket_footer_wrapper">
          <div className="basket_footer_subtotal">
            <span className="basket_footer_subtotal__field">Sub total</span>
            <span className="basket_footer_subtotal__value">R$ 48,00</span>
          </div>
          <div className="basket_footer_total">
            <span className="basket_footer_total__field">Total:</span>
            <span className="basket_footer_total__value">R$ 48,00</span>
          </div>
        </div>

        <button className="basket_footer__button" type="button">
          Checkout now
        </button>
      </footer>
    </div>
  );
}
