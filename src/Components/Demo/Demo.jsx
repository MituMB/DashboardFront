import React from 'react';
// import { Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem } from '@progress/kendo-react-charts';
// import 'hammerjs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: '2nd Floor', Production: 14449 },
  { name: '3rd Floor', Production: 19887 },
  { name: '4th Floor', Production: 13447 },
  { name: '5th Floor', Production: 9110 },
];
const FloorProductionChart = () => {
  // const categories = ['2nd Floor', '3rd Floor', '4th Floor', '5th Floor'];
  // const productionData = [14449, 19887, 13447, 9110];

  return (
    <BarChart
    width={600}
    height={300}
    data={data}
    margin={{
      top: 20,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="Production" fill="#8884d8" />
  </BarChart>
  );
};

export default FloorProductionChart;
