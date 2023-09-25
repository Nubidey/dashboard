import React, {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register
(   CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
    );


const BarChart = () => {
    const [chartData, setChartData] = useState({
        datasets:[],
    });


    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'],
            datasets: [{
                label: '2019',
                data: [20, 10, 30, 20, 40, 20, 30, 40, 20],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(255, 153, 20, 1',
        },
        {   label: '2020',
            data: [10, 30, 20, 30, 20, 30, 20, 30, 40],
            borderColor: 'rgb(202, 206, 212)',
                backgroundColor: 'rgb(21, 64, 96, 1',
        },
    ]   
    })
}, [])

  return (<div className=''>
    <div className=' border bg-white shadow-lg h-64 p-4'>
    <Bar data={chartData} options={chartOptions}/>
    </div>
    </div>
   
  );
};

export default BarChart;