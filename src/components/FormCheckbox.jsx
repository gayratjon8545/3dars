function FormCheckbox({ name }) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">Completed</span>
        <input
          type="checkbox"
          defaultChecked
          className="checkbox"
          name={name}
        />
      </label>
    </div>
  );
}

export default FormCheckbox;
