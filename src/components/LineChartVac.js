import React from 'react';
import { Line } from 'react-chartjs-2';


function LineChartVac({vaccine}) {
    const data = {
        labels: Object.keys(vaccine),
        datasets: [
          {
            label: '# of covrage',
            data: Object.values(vaccine),
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
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
  

export default LineChartVac;