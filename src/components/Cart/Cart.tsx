import { AddCircle, RemoveCircle } from "@mui/icons-material";

export default function Cart() {
  return (
    <div className="cart">
      <div className="cart_wrapper">
        <header className="cart_header">
          <h1 className="cart_header__title">Carrinho</h1>
        </header>

        <main className="cart_main">
          {/*<span className="cart_main_notfound__message">Seu carrinho está vázio</span>*/}
          
          <div className="cart_main_item">
            <nav className="cart_main_item_navbar">
              <span className="cart_main_item__name">Caipirinha</span>
              <span className="cart_main_item__price">R$13,00</span>
            </nav>
            <p className="cart_main_item__aditional"></p>
            <div className="cart_main_item_quantity">
              <RemoveCircle className="cart_main_item_quantity__icon" />
              <b className="cart_main_item_quantity__value">1</b>
              <AddCircle className="cart_main_item_quantity__icon" />
            </div>
          </div>

          <div className="cart_main_item">
            <nav className="cart_main_item_navbar">
              <span className="cart_main_item__name">Smash Brooks</span>
              <span className="cart_main_item__price">R$35,00</span>
            </nav>
            <p className="cart_main_item__aditional">Com 2 carnes</p>
            <div className="cart_main_item_quantity">
              <RemoveCircle className="cart_main_item_quantity__icon" />
              <b className="cart_main_item_quantity__value">1</b>
              <AddCircle className="cart_main_item_quantity__icon" />
            </div>
          </div>
        </main>

        <footer className="cart_footer">
          <div className="cart_footer_subtotal">
            <span className="cart_footer_subtotal__field">Sub total</span>
            <span className="cart_footer_subtotal__value">R$22,50</span>
          </div>
          <div className="cart_footer_total">
            <span className="cart_footer_total__field">Total:</span>
            <span className="cart_footer_total__value">R$48,00</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
