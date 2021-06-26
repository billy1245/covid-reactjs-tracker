import React from 'react';
import { Doughnut } from 'react-chartjs-2';



function DoughnutChart ({allMydata}) {
    const data = {
        labels: Object.keys(allMydata),
        datasets: [
          {
            label: '# of Votes',
            data: Object.values(allMydata),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'green',
              'red',
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'green',
              'red',
              
            ],
            borderWidth: 1,
          },
        ],
      };
    return(
  <>
    <div className=''>
      
    
    <Doughnut data={data} />
    </div>
  </>
    )
}

export default DoughnutChart