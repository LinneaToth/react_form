import { v4 as uuidv4 } from "uuid";

export default function Select({
  options,
  name,
  placeholder,
  description,
  handleChange,
  formValues,
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{description}</label>
      <select
        value={formValues[name]}
        name={name}
        id={name}
        className="form-control"
        onChange={(e) => {
          handleChange(name, e.target.value);
        }}>
        <option value="">{placeholder}</option>
        {options.map((option) => {
          return (
            <option key={uuidv4()} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
