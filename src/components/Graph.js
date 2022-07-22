import React from "react";
import Chart from "react-apexcharts";

function Graph(g) {
  console.log("api",g.data)
  const temp=g.data;
  const element=[];
  //console.log("temp",temp)
  temp.map((el,i)=>{
    element.push(el.main.temp_max)
    console.log("daily",el.main.temp_max)
  })

    var obj = {
      options: {
        chart: {
          zoom:{
            enabled:false
          }
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          categories:[1,2,3,4,5,6,7,8]
        },
        dataLabels: {
          enabled: false
        }
      },
      series: [
        {
          name: "Temp",
          data: element  //forecast data for seven days
        }
      ],
    };
    return (
      <div className="mixed-chart">
      <Chart options={obj.options} series={obj.series} type="area" width="100%"/>
    </div>
    );
  }


export default Graph;