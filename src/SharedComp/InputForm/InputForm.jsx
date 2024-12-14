import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
// 'CKL', 'SEL', 'Dyeing', 'Picasso', 'MCL', 'MILG1', 'MILG2', 'MTL', 'TFL', 'MPL', 'MEL', 'Knitting', 'MPELP'
const InputForm = ({onDateChange,onIdChange}) => {
  
const [selectedId, setSelectedId] = useState('');

// Sample dropdown options
const options = [
  { id: '1', name: 'CKL' },
  { id: '2', name: 'Dyeing' },
  { id: '3', name: 'Picasso' },
];

// Handle dropdown change
const handleChange = (event) => {
  setSelectedId(event.target.value);
  onIdChange(event.target.value)
  console.log('Selected ID:', event.target.value);
};


   // Initialize with current date
   const [selectedDate, setSelectedDate] = useState(new Date());
    // Handle date selection
    const handleDateChange = (date) => {
      if (date) {
        const formatted = date.toISOString().split('T')[0];  // Format to yyyy-MM-dd
        setSelectedDate(new Date(formatted));  // Update state
        onDateChange(formatted)
        console.log('Formatted Date:', formatted);  // Log formatted date
      } else {
        setSelectedDate(null);  // Clear the date if null
        onDateChange("")
      }
    };
  return (
    <div className="row">
        <div className="col-md-5">
      <label htmlFor="dropdown">Select an Option:</label>
      <select id="dropdown" value={selectedId} onChange={handleChange}>
        <option value="" disabled>Select an option</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>

      <p>Selected ID: {selectedId}</p>
    </div>

      <div className="col-md-3">
        <span className="me-2">Select date:</span>
        <DatePicker
          showIcon
          isClearable
          // minDate={new Date()}
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
        />
      </div>
    </div>
  );
};

export default InputForm;
