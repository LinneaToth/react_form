export default function Input({
  name,
  description,
  placeholder,
  inputType,
  handleChange,
  handleBlur,
  formValues,
}) {
  return (
    <div className="form-group">
      <label className="form-check-label " htmlFor={name}>
        {description}
      </label>
      <input
        onBlur={handleBlur}
        onChange={(e) => {
          inputType === "checkbox"
            ? handleChange(name, !formValues[name])
            : handleChange(name, e.target.value);
        }}
        checked={inputType === "checkbox" ? formValues[name] : undefined}
        value={formValues[name]}
        min="0"
        step={name === "amount" ? "100" : undefined}
        className={`mt-1 rounded-3 border-0  ${
          inputType !== "checkbox" ? "form-control" : "form-check-input ms-3"
        } `}
        type={inputType}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
