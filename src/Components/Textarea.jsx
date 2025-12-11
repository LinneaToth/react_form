export default function Textarea({
  name,
  description,
  placeholder,
  handleChange,
  handleBlur,
  formValues,
}) {
  return (
    <div className="form-group">
      <label htmlFor={`id-${name}`}>{description}</label>
      <textarea
        id={`id-${name}`}
        name={name}
        onBlur={handleBlur}
        onChange={(e) => {
          handleChange(name, e.target.value);
        }}
        value={formValues[name] ?? ""}
        className="form-control form-control-lg mt-2">
        placeholder = {placeholder}
      </textarea>
    </div>
  );
}
