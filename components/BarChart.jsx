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
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Sales',
                data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(53, 162, 245, 0.4',
        },
    ]   
    })
}, [])

  return (
    <div className='md:col-span-2 lg:h-[50vh] h-[25vh] m-auto p-4 border rounded-lg bg-white'>
    <Bar data={chartData} options={chartOptions}/>
    </div>
  );
};

export default BarChart;