import React from 'react';
import { Bar } from 'react-chartjs-2';



function VacVerticalBar ({vaccVerBar}){ 


    const data = {
        labels: vaccVerBar.map(e=> e.country ).slice(0,10),
        datasets: [
          {
            label: '# of Cases',
            data: vaccVerBar.map(e=> Object.values(e.timeline).reduce((acc , e)=> acc + e) ),
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

export default VacVerticalBar;