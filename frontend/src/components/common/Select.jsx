// components/common/Select.jsx
const Select = ({ label, options, value, onChange, name }) => (
  <div className="flex flex-col gap-1 mb-4">
    {label && <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
    >
      <option value="">All</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
