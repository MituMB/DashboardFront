import React, { useEffect, useState } from "react";

import axios from "axios";
import FloorProductionChart from "../../Components/ChartComp/FloorProduction";
import FloorTargetAchivement from "../../Components/ChartComp/FloorTargetAchivement";
import FactoryProduction from "../../Components/ChartComp/FactoryProduction";
import FloorWiseEffeciency from "../../Components/ChartComp/FloorWiseEffeciency";
import FloorWiseDHU from "../../Components/ChartComp/FloorWiseDHU";
// import { newDate } from "react-datepicker/dist/date_utils";
const ChartList = () => {
  const [data, setData] = useState([`https://mis-download.mascoknit.com/api/EventInfo/performance-by-date?date=2024-11-24&unitId=8`]);
  const [error, setError] = useState(null);

  const date = new Date();
  console.log(date);
  const unit_id = 8;
  // date=2024-11-24

  useEffect(() => {
    axios
      .get(
        `https://mis-download.mascoknit.com/api/EventInfo/performance-by-date?date=2024-11-24&unitId=8`
      )
      .then(() => {
        setData(data);
        console.log(data);
        
      })
      .catch((error) => {
        setError("Failed to fetch data");
        console.error(error);
      });
  }, [date,unit_id]);


  return (
    <>
      {/* <Demo/> */}

     
      <div className="row">
        <div className="col-md-6">
          {/* <FloorProductionChart title="Floor wise Production"  data={data}/> */}
          <FloorProductionChart title="Floor wise Production" />
        </div>
        <div className="col-md-6">
          <FactoryProduction title="Factory Production Summary" />
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-md-5">
          <FloorTargetAchivement title="Floor wise Target Achivement%" />
        </div>
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-6">
              <FloorWiseEffeciency title="Floor Wise Effeciency" />
            </div>
            <div className="col-md-6">
              <FloorWiseDHU title="Floor Wise DHU" />
            </div>
          </div>
        </div>
      </div>

      {/* <NeedleChart/> */}
      {/* <PieChart/> */}
    </>
  );
};

export default ChartList;
