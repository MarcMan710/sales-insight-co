// components/dashboard/FilterPanel.jsx
import Input from '../common/Input';
import Select from '../common/Select';

const FilterPanel = ({ filters, onChange }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow flex flex-wrap gap-4">
      <Input
        label="Start Date"
        type="date"
        name="startDate"
        value={filters.startDate}
        onChange={onChange}
      />
      <Input
        label="End Date"
        type="date"
        name="endDate"
        value={filters.endDate}
        onChange={onChange}
      />
      <Select
        label="Region"
        name="region"
        value={filters.region}
        onChange={onChange}
        options={[
          { value: 'North', label: 'North' },
          { value: 'South', label: 'South' },
          { value: 'East', label: 'East' },
          { value: 'West', label: 'West' },
        ]}
      />
      <Select
        label="Category"
        name="category"
        value={filters.category}
        onChange={onChange}
        options={[
          { value: 'Electronics', label: 'Electronics' },
          { value: 'Clothing', label: 'Clothing' },
          { value: 'Home', label: 'Home' },
        ]}
      />
    </div>
  );
};

export default FilterPanel;
