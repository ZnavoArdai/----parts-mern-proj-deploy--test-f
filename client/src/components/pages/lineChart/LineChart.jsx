import React, { useContext, useEffect, useState } from "react";
import { Chart as ChartJs, CategoryScale,LinearScale,LineController,LineElement,PointElement
  ,Title,Tooltip,Legend, BarElement } from "chart.js";
import { Line} from "react-chartjs-2";
import { dataContext } from "../../../context/dataContext";

ChartJs.register( CategoryScale,LinearScale,LineController,PointElement
  ,LineElement,Title,Tooltip,Legend, BarElement );

const BarChart = () => {

  const { orders} = useContext(dataContext); 

 const [chartData,setChartData]=useState({
  datasets:[]
 })
 const [chartOptions,setChartOptions]=useState()

 useEffect(()=>{

  setChartData({
    labels:orders.map((item)=>{
      const array=[]

      let newDate= new Date(item.month);

      array.push(newDate.getMonth())

      return array
    }),
    datasets:[
      {
        label:"orders by months",
        data:orders.map((item)=>item.numberOfOrders),
        borderColor:"#4ba4a1",
        backgroundColor:"#4ba4a1",
        pointBackgroundColor:"#4ba4a1",
        pointBorderColor:"#4ba4a1",
      }
    ]
  })
  setChartOptions({
    responsive:true,
    plugins:{
      legend:{
        position:"top"
      },
      titel:{
        display:true,
        text:"w"
      }
    }
  })
 },[orders])
 console.log(orders)

  return (
    <div className="chartContainer mt-5 text-center">
Orders in the last 7 months
<div className="chart p-3">
      <Line data={chartData} height={60}  options={chartOptions}/>
    </div>
    </div>
   
  );
};

export default BarChart;
