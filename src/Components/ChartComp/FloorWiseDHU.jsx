
import React from "react";
import "./ChartComp.scss"; // Import custom CSS for styling

const FloorWiseDHU = ({ title }) => {
  // Your data
  const data = [
    { name: "2nd Floor", Efficiency: 11 },
    { name: "3rd Floor", Efficiency: 9 },
    { name: "4th Floor", Efficiency: 7 },
    { name: "5th Floor", Efficiency: 8 },
  ];

  // Function to determine the bar color based on efficiency percentage
  // const getBarColor = (percentage) => {
  //   if (percentage >= 70) return "#4caf50";
  //   if (percentage >= 50) return "#ffa726"; 
  //   return "#f44336"; 
  // };

  return (
    <div className="dhu-progress-bars card">
      <h3
        className="title"
        style={{ color: "#4957aa", fontWeight: "600", textAlign: "center" }}
      >
        {title}
      </h3>
      <div className="bars-container">
        {data.map((item, index) => (
          <div key={index} className="bar-item">
            <div className="bar-label">{item.name}</div>
            <div className="bar-wrapper">
              <div
                className="bar"
                style={{
                  width: `${item.Efficiency}%`, // Set width dynamically
                  height: "100%", // Set width dynamically
                  // backgroundColor: getBarColor(item.Efficiency), // Set color dynamically
                  backgroundColor:"#ffb699", // Set color dynamically
                }}
              ></div>
               
            </div>
            <span className="bar-value">{item.Efficiency}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};



export default FloorWiseDHU