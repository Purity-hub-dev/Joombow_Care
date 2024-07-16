const Select = ({ label, error, options = [], name, value, setValue, defaultValue = "Select One" }) => {
  return (
    <div className="grid w-full gap-2">
      <label>{label}</label>

      <select
        name={name}
        value={value ?? defaultValue}
        onChange={(e) => setValue(e.target.value)}
        className="grow rounded-md border-current bg-white p-2 px-3 text-black md:text-white outline-none md:bg-[#D9D9D980] capitalize"
      >

        <option >
          {defaultValue}
        </option>
        {options.map((op, idx) => (
          <option value={op} key={idx}>
            {op}
          </option>
        ))}
      </select>

      <span className="m-0 h-fit p-0 leading-none">
        {error && <span>{error}</span>}
      </span>
    </div>
  );
};

export default Select;
