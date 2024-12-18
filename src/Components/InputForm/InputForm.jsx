import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
// 'CKL', 'SEL', 'Dyeing', 'Picasso', 'MCL', 'MILG1', 'MILG2', 'MTL', 'TFL', 'MPL', 'MEL', 'Knitting', 'MPELP'
const options = [
  { label: "CKL", id: 1 },
  { label: "Dyeing", id: 2 },
  { label: "Picasso", id: 3 },
];
const InputForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="row">
      <div className="col-md-3">
        <div className="row">
          <span className="col-md-3">Select Unit:</span>
          <div className="col-md-9">
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <span className="me-2">Select date:</span>
        <DatePicker
          showIcon
          isClearable
          minDate={new Date()}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy-mm-dd"
        />
      </div>
    </div>
  );
};

export default InputForm;
