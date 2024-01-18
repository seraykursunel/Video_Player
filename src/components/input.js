export default function Input({ name, value, selectedRadio, handleChange }) {
  return (
    <>
      <input
        type="radio"
        value={value}
        checked={selectedRadio === value}
        onChange={() => handleChange(value)}
      />
      Video {name} <span />
    </>
  );
}
