import { AddCircle, RemoveCircle } from "@mui/icons-material";

export default function ItemModal() {
  return (
    <div className="item-modal">
      <div className="item-modal_wrapper">
        <div className="item-modal_banner">
          <div className="item-model_banner__image"></div>
        </div>

        <header className="item-modal_header">
          <h1 className="item-modal_header__title">Smash Brooks</h1>
          <p className="item-modal_header__description">
            100g pressed hamburger, mozzarella cheese, pickles, red onion,
            grilled bacon and traditional Heinz mayonnaise.
          </p>
        </header>

        <main className="item-modal_main">
          <div className="item-modal_main__choose">
            <h2>Choose your size</h2>
            <p>Select 1 option</p>
          </div>

          <div className="item-modal_main__options">
            <div className="item-modal_main__option">
              <label className="item-modal_main_label">
                <div className="item-modal_main_label_desc">
                  <span className="item-modal_main_label__info">1 meat</span>
                  <span className="item-modal_main_label__price">R$33,00</span>
                </div>
                <input
                  type="radio"
                  name="item-radio"
                  value="item-1"
                  defaultChecked={true}
                  className="item-modal_main_radio"
                />
              </label>
            </div>

            <div className="item-modal_main__option">
              <label className="item-modal_main_label">
                <div className="item-modal_main_label_desc">
                  <span className="item-modal_main_label__info">2 meats</span>
                  <span className="item-modal_main_label__price">R$33,00</span>
                </div>
                <input
                  type="radio"
                  name="item-radio"
                  value="item-2"
                  className="item-modal_main_radio"
                />
              </label>
            </div>
          </div>
        </main>

        <footer className="item-modal_footer">
          <div className="item-modal_footer_actions">
            <RemoveCircle className="item-modal_footer_quantity__icon" />
            <b className="item-modal_footer_quantity__value">1</b>
            <AddCircle className="item-modal_footer_quantity__icon" />
          </div>
          <button className="item-modal_footer__button" type="button">
            Add to Order R$11,75
          </button>
        </footer>
      </div>
    </div>
  );
}
