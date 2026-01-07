import Minus from '../assets/minus.svg'
import Plus from '../assets/plus.svg'
import '../styles/Quantity.css'

export default function Quantity({
  quantity,
  onIncrement,
  onDecrement,
  onChange,
}) {
  const onInputChange = (e) => onChange(e.target.value);

  return (
    <div className="quantity-counter">
      <button
        className="decrement"
        onClick={onDecrement}
        aria-label="decrement"
        type="button">
          <img src={Minus} alt="minus" />
      </button>

      <input
        name="quantity-input"
        className="quantity-input"
        value={quantity}
        type="text"
        min="1"
        onChange={onInputChange}
        autoComplete="off"
        inputMode="numeric"
        disabled
      />

      <button
        className="increment"
        aria-label="increment"
        onClick={onIncrement}
        type="button"
      >
        <img src={Plus} alt="plus" />
      </button>
    </div>
  )

}