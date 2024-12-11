import NeedlePieChart from "./NeedlePieChart";

const FactoryProduction = ({title}) => {
  // Example data for multiple charts
  const chartsData = [
    {
      id: 1,
      data: [
        { name: "Factory Effeciency", value: 30, color: "#eeafaf" },
      ],
      needleValue:57,
    },
    {
      id: 2,
      data: [

        { name: "Factory Target Ach %", value: 30, color: "#3375af" },
      ],
      needleValue: 89,
    },
  ];

  return (
    <div className="card pb-4">
      <h3 className='py-4 text-center' style={{color:"#4957aa", fontWeight:"600"}}>{title}</h3>
      <div className="d-flex">

      {chartsData.map((chart) => (
        <NeedlePieChart
          key={chart.id}
          data={chart.data}
          needleValue={chart.needleValue}
          chartId={chart.id}
          name={chart.data?.name}
        />
      ))}
      </div>
    </div>
  );
};

export default FactoryProduction;
