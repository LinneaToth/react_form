export default function Input({
  name,
  description,
  placeholder,
  inputType,
  onChange,
  setValues,
  values,
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{description}</label>
      <input
        className={`rounded-3 border-0 ${
          inputType !== "checkbox" && "form-control"
        }`}
        type={inputType}
        name={name}
      />
    </div>
  );
}
