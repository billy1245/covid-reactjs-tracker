import React from 'react';
import { Line } from 'react-chartjs-2';


function LineChart({chartDays}) {
    const data = {
        labels: Object.keys(chartDays?.cases),
        datasets: [
          {
            label: '# of cases',
            data: Object.values(chartDays?.cases),
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
          {
            label: '# of deaths',
            data: Object.values(chartDays?.deaths),
            fill: false,
            backgroundColor: 'red',
            borderColor: 'red',
          },
          {
            label: '# of recovered',
            data: Object.values(chartDays.recovered),
            fill: false,
            backgroundColor: 'green',
            borderColor: 'green',
          },
        ],
        
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

      return(

        <>
    
    <Line data={data} options={options} />
  </>
      )

}
  

export default LineChart;