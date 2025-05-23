export default function Textarea({ name, description, placeholder, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{description}</label>
      <textarea name={name} id="" className="form-control">
        {placeholder}
      </textarea>
    </div>
  );
}
