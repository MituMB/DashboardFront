import React from 'react';
// import { Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem } from '@progress/kendo-react-charts';
// import 'hammerjs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList } from 'recharts';

const data = [
  { name: '2nd Floor', Production: 81 },
  { name: '3rd Floor', Production: 97},
  { name: '4th Floor', Production: 90 },
  { name: '5th Floor', Production: 91 },
];
const FloorTargetAchivement = ({title}) => {
  // const categories = ['2nd Floor', '3rd Floor', '4th Floor', '5th Floor'];
  // const productionData = [14449, 19887, 13447, 9110];

  return (
<div className="card pb-4">
<h3 className='py-4 text-center' style={{color:"#4957aa", fontWeight:"600"}}>{title}</h3>
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
    {/* <Bar dataKey="Production" fill="#8884d8" /> */}
    <Bar dataKey="Production" fill="#8884d8">
      {data.map((entry, index) => (
        <LabelList
          key={`label-${index}`}
          dataKey="Production"
          position="insideRight"
          formatter={(value) => `${value}%`}
          fill="#333"
        />
      ))}

    </Bar>
  </BarChart>
</div>
  );
};

export default FloorTargetAchivement;
