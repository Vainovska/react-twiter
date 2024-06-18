import "./index.css";
import { useState } from "react";
export default function Component({ placeholder, button, onSumbit }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  const handleSumbit = () => {
    if (value.length === 0) return null;
    if (onSumbit) {
      onSumbit(value);
    } else {
      throw new Error("onSumbit props is underfind");
    }
    setValue("");
  };
  const isDisabled = value.length === 0;
  return (
    <div className="field-form">
      <textarea
        onChange={handleChange}
        value={value}
        rows={2}
        placeholder={placeholder}
        className="field-form__field"
      ></textarea>
      <button
        disabled={isDisabled}
        onClick={handleSumbit}
        className="field-form__button"
      >
        {button}
      </button>
    </div>
  );
}
