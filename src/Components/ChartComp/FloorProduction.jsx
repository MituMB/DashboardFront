import React from 'react';
// import { Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem } from '@progress/kendo-react-charts';
// import 'hammerjs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, Cell} from 'recharts';
import { baseURL } from '../../utils/api';
export const floorWPerformance = `${baseURL}/api/EventInfo/performance-by-date?date=2024-11-24&unitId=8`
console.log(floorWPerformance);


const data = [
  { name: '2nd Floor', Production: 14449 },
  { name: '3rd Floor', Production: 19887 },
  { name: '4th Floor', Production: 13447 },
  { name: '5th Floor', Production: 9110 },
];

const colors = ['#fabdbd', '#82ca9d', '#ffc658', '#ff7f50', '#8dd1e1']; // Array of colors for the bars
const FloorProductionChart = ({title}) => {
  // const categories = ['2nd Floor', '3rd Floor', '4th Floor', '5th Floor'];
  // const productionData = [14449, 19887, 13447, 9110];

  return (

  <div className="card pb-4">
    <h3 className='py-4 text-center' style={{color:"#4957aa", fontWeight:"600"}}>{title}</h3>
  <BarChart
    layout="vertical"
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
    <XAxis type="number" />
    <YAxis type="category" dataKey="name" />
    <Tooltip />
    <Legend />
    <Bar dataKey="Production" >
      {data.map((entry, index) => (
        <LabelList
          key={`label-${index}`}
          dataKey="Production"
          position="insideRight"
          fill="#333"
        />
      ))}
       {data.map((entry, index) => (
            <Cell  key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
    </Bar>
  </BarChart>
</div>
  );
};

export default FloorProductionChart;
