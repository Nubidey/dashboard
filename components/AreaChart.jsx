import React, {useEffect, useState} from 'react';
    import {
      Chart as ChartJS,
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      ArcElement,
      Filler,
      Legend,
    } from 'chart.js';
import { Line } from 'react-chartjs-2';
    
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Filler,
      ArcElement,
      Legend
    );

const AreaChart1 = () => {
    const [chartData, setChartData] = useState({
        datasets:[],
    });


    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'],
            datasets: [{
                label: '2019',
                data: [20, 25, 10, 25, 35, 25, 30, 40, 20],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(255, 153, 20, 1',
                fill: 'rgb(255, 153, 20, 1',
        },
        {   label: '2020',
            
            data: [10, 25, 20, 25, 40, 30, 15, 30, 40],
            borderColor: 'rgb(202, 206, 212)',
                backgroundColor: 'rgb(21, 64, 96, 1',
                fill:'rgb(255, 153, 20, 1',
        },
    ]   
    })
}, [])

  return (
    <div className='border bg-white shadow-lg h-64'>
    <Line data={chartData} options={chartOptions}/>
    </div>
    
  );
};
export default AreaChart1;