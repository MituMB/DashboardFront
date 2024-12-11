/* eslint-disable no-shadow */
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, Label, Tooltip, Legend } from 'recharts';

const RADIAN = Math.PI / 180;

// Data for the chart
const data = [{ name: "Factory Target Ach %", value: 57, color: "#eeafaf" },];
const cx = 150; // Center x-coordinate
const cy = 100; // Center y-coordinate
const iR = 50; // Inner radius
const oR = 100; // Outer radius
const value = 57; // Needle value (percent)

const needle = (value, data, cx, cy, iR, oR, color) => {
    let total = 0;
    data.forEach((v) => {
      total += v.value;
    });
    const angle = 180.0 * (1 - value / total); // Calculate angle
    const length = (iR + 2 * oR) / 3; // Needle length
    const sin = Math.sin(-RADIAN * angle);
    const cos = Math.cos(-RADIAN * angle);
    const r = 5; // Needle base radius
    const x0 = cx; // Needle center x
    const y0 = cy; // Needle center y
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;
  // Needle components (circle + triangle)
  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" key="circle" />,
    <path
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="none"
      fill={color}
      key="path"
    />,
  ];
};

const NeedleChart = () => {
    return (
      <>
        <div className="d-flex">
          {/* Pie Chart one*/}
          <div
            className="piechart"
            style={{
              position: "relative",
              textAlign: "center",
              width: "300px",
              height: "250px",
            }}
          >
            <PieChart width={300} height={200}>
              <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={data}
                cx={cx}
                cy={cy}
                innerRadius={iR}
                outerRadius={oR}
                fill="#8884d8"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              {/* Add Needle */}
              {needle(57, data, cx, cy, iR, oR, "#2e2e2c")}
              <Label/>
            </PieChart>

            <div style={{position: "absolute",top: "42%",left: "40%",fontSize: "30px",fontWeight: "500",color: "#7e7e7e"}}>
              {value}%
            </div>

            <div style={{ textAlign: "center", fontSize: "20px" }}>
              {data[0].name}
            </div>
          </div>
          {/* Pie Chart one end */}

          {/* Pie Chart two start */}
          <div
            className="piechart"
            style={{
              position: "relative",
              textAlign: "center",
              width: "300px",
              height: "250px",
            }}
          >
            {/* Pie Chart */}
            <PieChart width={300} height={200}>
              <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={data}
                cx={cx}
                cy={cy}
                innerRadius={iR}
                outerRadius={oR}
                fill="#8884d8"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              {/* Add Needle */}
              {needle(57, data, cx, cy, iR, oR, "#2e2e2c")}
            </PieChart>

            {/* Centered Label for Value */}
            <div
              style={{
                position: "absolute",
                top: "42%",
                left: "40%",
                fontSize: "30px",
                fontWeight: "500",
                color: "#7e7e7e",
              }}
            >
              {value}%
            </div>

            {/* Caption */}
            <div style={{ textAlign: "center", fontSize: "20px" }}>
              {data[0].name}
            </div>
          </div>
          {/* Pie Chart two end */}
        </div>
      </>
    );
  
}

export default NeedleChart;
