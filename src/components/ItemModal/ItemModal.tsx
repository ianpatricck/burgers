import { Add, CancelRounded, Remove } from "@mui/icons-material";
import {
  close,
  ItemModalState,
} from "../../storage/features/item-modal/itemModalSlice";
import { addToCart } from "../../storage/features/cart/cart";
import { useAppDispatch } from "../../storage/app/hooks";
import { useState } from "react";
import { convertAmountToBRL } from "../../helpers/convertAbountToBRL";

type Option = {
  name: string;
  price: number;
};

export default function ItemModal({ food }: ItemModalState) {
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useAppDispatch();

  function getInitialPrice(): number {
    return food.price
      ? food.price
      : food.modifiers
        ? food.modifiers[0].items[0].price
        : 0;
  }

  function getInitialOption(): Option | undefined {
    let firstItem = food.modifiers ? food.modifiers[0].items[0] : undefined;
    return firstItem
      ? { name: firstItem.name, price: firstItem.price }
      : undefined;
  }

  const [price, setPrice] = useState<number>(getInitialPrice());
  const [realPrice, setRealPrice] = useState<number>(getInitialPrice());
  const [option, setOption] = useState<Option | undefined>(getInitialOption());

  function handlePrice(option: { name: string; price: number }): void {
    setQuantity(1);
    setPrice(option.price);
    setRealPrice(option.price);
    setOption(option);
  }

  function handleQuantity(newQuantity: number): void {
    if (newQuantity >= 1 && newQuantity <= 20) {
      setQuantity(newQuantity);
      setPrice(realPrice * newQuantity);
    }
  }

  function addToOrder() {
    dispatch(
      addToCart({
        id: food.id,
        name: food.name,
        price: price,
        real_price: realPrice,
        aditional: option?.name,
        quantity: quantity,
      }),
    );

    dispatch(close());
  }

  return (
    <div className="item-modal">
      <div className="item-modal_wrapper">
        <div className="item-modal_banner">
          <CancelRounded
            className="item-modal_banner__cancel"
            onClick={() => dispatch(close())}
          />
          <div
            className="item-model_banner__image"
            style={{
              backgroundImage: `url(${food.images ? food.images[0].image : null})`,
            }}
          ></div>
        </div>

        <header className="item-modal_header">
          <h1 className="item-modal_header__title">{food.name}</h1>
          <p className="item-modal_header__description">
            {food.description ?? `Sem descrição provida`}
          </p>
        </header>

        {food.modifiers && (
          <main className="item-modal_main">
            <div className="item-modal_main__choose">
              <h2>{food.modifiers[0].name}</h2>
              <p>Select 1 option</p>
            </div>

            <div className="item-modal_main__options">
              {food.modifiers[0].items.map((item) => (
                <div className="item-modal_main__option" key={item.id}>
                  <label className="item-modal_main_label">
                    <div className="item-modal_main_label_desc">
                      <span className="item-modal_main_label__info">
                        {item.name}
                      </span>
                      <span className="item-modal_main_label__price">
                        R${convertAmountToBRL(item.price)}
                      </span>
                    </div>
                    <input
                      type="radio"
                      name="item-radio"
                      value={item.name}
                      defaultChecked={
                        food.modifiers && food.modifiers[0].items[0] == item
                          ? true
                          : false
                      }
                      className="item-modal_main_radio"
                      onChange={() =>
                        handlePrice({ name: item.name, price: item.price })
                      }
                    />
                  </label>
                </div>
              ))}
            </div>
          </main>
        )}

        <footer className="item-modal_footer">
          <div className="item-modal_footer_actions">
            <Remove
              className={`item-modal_footer_quantity__icon${quantity == 1 ? "--disable" : ""}`}
              onClick={() => handleQuantity(quantity - 1)}
            />
            <b className="item-modal_footer_quantity__value">{quantity}</b>
            <Add
              className={`item-modal_footer_quantity__icon${quantity == 20 ? "--disable" : ""}`}
              onClick={() => handleQuantity(quantity + 1)}
            />
          </div>
          <button
            className="item-modal_footer__button"
            type="button"
            onClick={addToOrder}
          >
            Add to Order R${convertAmountToBRL(price)}
          </button>
        </footer>
      </div>
    </div>
  );
}
