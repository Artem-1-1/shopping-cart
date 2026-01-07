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
          <i className="fa-solid fa-minus" />
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
      />

      <button
        className="increment"
        aria-label="increment"
        onClick={onIncrement}
        type="button"
      >
        <i className="fa-solid fa-plus" />
      </button>
    </div>
  )

}