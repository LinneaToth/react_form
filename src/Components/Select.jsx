export default function Select({
  options,
  name,
  placeholder,
  description,
  onChange,
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{description}</label>

      <select name={name} id={name} className="form-control">
        <option value="">{placeholder}</option>
        {options.map((option) => {
          return <option value={option}>{option}</option>;
        })}
      </select>
    </div>
  );
}
