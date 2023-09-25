import React, {useEffect, useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = () => {
    const [chartData, setChartData] = useState({
        datasets:[],
    });


    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
                        
                        datasets: [{
                          data: [55, 45],
                          labels: ['Red', 'Blue'],
                          backgroundColor: ['rgb(21, 64, 96)', 'rgb(255, 153, 20)'],
                          text: 'hello'
                       }]
                    
                },
        )
    },[])

  return (
    <div className='border bg-white shadow-lg h-full items-center'>
    <Doughnut data={chartData} options={chartOptions} margin={{top:20, right:0, bottom:20, left:0}}/>
    <div className='text-center'>
    <h2>Lorem ipsum</h2>
    <h2>Lorem ipsum</h2>
    <h2>Lorem ipsum</h2>
    
    </div>
    </div>
    
    
  );
};
export default DoughnutChart;