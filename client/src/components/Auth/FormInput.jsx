const FormInput = ({
  id,
  type,
  label,
  required,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      <div className="form-floating">
        <input
          id={id}
          className="form-control"
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <label className="form-label" htmlFor={id}>
          {label}
        </label>
      </div>
    </>
  );
};

export default FormInput;
