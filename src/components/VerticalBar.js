import React from 'react';
import { Bar } from 'react-chartjs-2';



function VerticalBar ({verBar}){ 


    const data = {
        labels: verBar.map(e=> e.country ),
        datasets: [
          {
            label: '# of Cases',
            data: verBar.map(e => e.cases),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              
            ],
            borderWidth: 1,
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
 return( <>
    
    <Bar data={data} options={options} />
  </>)
}

export default VerticalBar;