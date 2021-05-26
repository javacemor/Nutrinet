import React from 'react';
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';

function MacroNutrientChart({ nutrientDetails }) {
  console.log('DETAils: ', nutrientDetails);
    return (
        <>
        <div style={{display:'flex'}}>
        <div>
        <Pie 
            data={{
              labels: ['Target Energie', 'Your Level'],
              datasets: [
                {
                  // label: 'Macronutrients',
                  data: [nutrientDetails.details.kcal_week_goal, nutrientDetails.details.kcaltotal],
                  backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    // 'rgba(255, 206, 86, 0.2)',
                    // 'rgba(75, 192, 192, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)'
                ],
                  borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    // 'rgba(255, 206, 86, 1)',
                    // 'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)'
                ],
                  borderWidth: 1
                },
              ]
            }}
            height={250}
            width={200}
            // options={{
            //   maintainAspectRatio: false,
            //   scales: {
            //     yAxes: [{
            //         ticks: {
            //             beginAtZero: true
            //         }
            //     }]
            // }
            // }}
          />
        </div>  

        <div>
        <Bar 
            data={{
              labels: ['Graisses','Protéines'],
              datasets: [
                {
                  label: 'Min Target',
                  data: [nutrientDetails.details.fats_min, nutrientDetails.details.proteins_min],
                  backgroundColor: [
                    ['rgba(255, 99, 132, 0.2)', 'red'],
                    ['rgba(75, 192, 192, 0.2)', 'yellow'],
                    // ['rgba(153, 102, 255, 0.2)', 'blue'],
                    // 'rgba(75, 192, 192, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)'
                ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    // 'rgba(255, 206, 86, 1)',
                    // 'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)'
                ],
                  borderWidth: 1
                },
                {
                  label: "Your Level",
                  data: [nutrientDetails.details.Fattotal, nutrientDetails.details.Proteintotal],
                  backgroundColor: 'green',
                  borderColor: 'green',
                },
                {
                  label: "Max Target",
                  data: [nutrientDetails.details.fats_max, nutrientDetails.details.proteins_max],
                  backgroundColor: 'red',
                  borderColor: 'red',
                }
              ]
            }}
            height={300}
            width={400}
            // options={{
            //   maintainAspectRatio: false,
            //   scales: {
            //     yAxes: [{
            //         ticks: {
            //             // beginAtZero: true
            //         }
            //     }]
            // }
            // }}
          />
        </div>
        </div>  
        </>
    )
}

export default MacroNutrientChart;
