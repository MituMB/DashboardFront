import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Sector,
  ResponsiveContainer,
} from "recharts";

// eslint-disable-next-line react/prop-types
const NeedlePieChart = ({ data, needleValue, chartId }) => {
    console.log(data);
  const RADIAN = Math.PI / 180;
  const cx = 50; // Center x of pie
  const cy = 50; // Center y of pie
  const iRadius = 50; // Inner radius of the pie
  const oRadius = 100; // Outer radius of the pie

  const angle = (needleValue / 100) * 180 - 90; // Map value to angle (0% -> -90° and 100% -> 270°)
  // console.log(angle);
const needleLength = oRadius * 0.4; // Adjust needle length to 90% of outer radius
   // Needle's top point (thin end)
   const needleTipX = cx + needleLength * Math.cos(angle * RADIAN);
   const needleTipY = cy + needleLength * Math.sin(-angle * RADIAN);
 
   // Needle's bottom points (thick end)
   const needleBaseLeftX = cx + 2 * Math.cos(-(angle + 90) * RADIAN); // Offset perpendicular to angle
   const needleBaseLeftY = cy + 2 * Math.sin(-(angle + 90) * RADIAN);
 
   const needleBaseRightX = cx + 2 * Math.cos(-(angle - 90) * RADIAN);
   const needleBaseRightY = cy + 2 * Math.sin(-(angle - 90) * RADIAN);


 

  return (
    <div id={`chart-${chartId}`} style={{ width: "300px", height: "200px",position:"relative" }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx={`${cx}%`}
            cy={`${cy}%`}
            innerRadius={`${iRadius}%`}
            outerRadius={`${oRadius}%`}
            // startAngle={90}
            // endAngle={450}
            startAngle={0}
            endAngle={180}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
            {/* Draw the needle */}
            <svg
            x="0"
            y="0"
            viewBox="0 0 100 100"
            style={{ overflow: "visible", position: "absolute" }}
          >
            <polygon
              points={`${needleTipX},${needleTipY} ${needleBaseLeftX},${needleBaseLeftY} ${needleBaseRightX},${needleBaseRightY}`}
              fill="#666"
            />
          </svg>
          {/* Needle base circle */}
          <circle cx={`${cx}%`} cy={`${cy}%`} r="5" fill="#666" />
        <div>{data}</div>
        </PieChart>
      
      </ResponsiveContainer>
   
      <div style={{position: "absolute",top: "52%",left: "40%",fontSize: "30px",fontWeight: "500",color: "#7e7e7e"}}>
              {needleValue}%
            </div>
            <div style={{ position: "absolute",top: "160px",left: "0%",width:"100%",textAlign: "center", fontSize: "20px" }}>
              {data[0].name}
            </div>
           
            
    </div>
  );
};
export default NeedlePieChart;
