import React, { useEffect, useState } from "react";
import InputForm from "../../SharedComp/InputForm/InputForm";
import { FloorProductionChart,FactoryProduction,FloorTargetAchivement, FloorWiseDHU, FloorWiseEffeciency } from "../../Components/ChartComp";

const DemoDashboard = () => {
  const [data, setData] = useState(null);
  const [selectedId, setSelectedId] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  
  // Handle ID selection (simulated dropdown)
  const handleIdChange = (id) => {
    setSelectedId(id);
  };
  // Handle date change from DatePickerExample
  const handleDateChange = (date) => {
   setSelectedDate(date);
 };
 const fetchData = async () => {
  const url = `https://mis-download.mascoknit.com/api?date=${selectedDate}&unitId=${selectedId}`;
  console.log(url);
  
  try {
    const response = await fetch(url,{ mode: 'no-cors' });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    setData(result);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

useEffect(() => {
  fetchData();
}, [selectedDate, selectedId]);
console.log(selectedId);
console.log(selectedDate);

  return (
    <div>
      <InputForm onDateChange={handleDateChange} onIdChange={handleIdChange}/>
      <p>ID: {selectedId || 'None'}</p>
      <p>Date: {selectedDate || 'None'}</p>
      <div
        className="dashboard-header d-flex align-items-center justify-content-around wrap py-3"
        style={{ flexWrap: "wrap" }}
      >
        <div
          className="title"
          style={{
            padding: "20px",
            background: "#b8dc8e",
            color: "#4a427e",
            borderRadius: "18px",
          }}
        >
          <h2 style={{ fontWeight: "500" }}>
            Floor wise Performance Dashboard
          </h2>
        </div>
        <div style={{ fontSize: "50px", color: "#ec8a83", fontWeight: "bold" }}>
          <time>26th June, 2024</time>
        </div>
      </div>

      <div className="comp_area">
        <div className="row">
          <div className="col-md-6">
            {/* <FloorProductionChart title="Floor wise Production"  data={data}/> */}
            <FloorProductionChart title="Floor wise Production" />
          </div>
          <div className="col-md-6">
            {/* <FactoryProduction title="Factory Production Summary" /> */}
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-5">
            {/* <FloorTargetAchivement title="Floor wise Target Achivement%" /> */}
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6">
                {/* <FloorWiseEffeciency title="Floor Wise Effeciency" /> */}
              </div>
              <div className="col-md-6">
                {/* <FloorWiseDHU title="Floor Wise DHU" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoDashboard;
