import React from "react";
import FloorProductionChart from "../../Components/ChartComp/FloorProduction";
import FloorTargetAchivement from "../../Components/ChartComp/FloorTargetAchivement";
import FactoryProduction from "../../Components/ChartComp/FactoryProduction";
import ChartList from "../ChartList/ChartList";
// import NeedleChart from '../../Components/ChartComp/NeedleChart'
// import NeedleChartTwo from '../../Components/ChartComp/PieChart'
// import PieChart from '../../Components/ChartComp/PieChart'
// import Demo from '../../Components/Demo/Demo'
// import FloorProductionChart from '../../Components/Demo/Demo'
// import Demo from '../../Components/Demo/Demo'

const FloorWisePerformance = () => {
  return (
    <>
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

      <ChartList />
    </>
  );
};

export default FloorWisePerformance;
