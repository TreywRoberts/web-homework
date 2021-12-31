import React from 'react'
import 'chart.js/auto'
import { Pie } from 'react-chartjs-2'

const PieChart = ({data}) => {
    
    const resFun = data.filter(it => new RegExp('Fun').test(it.description))
    const resFood = data.filter(it => new RegExp('Food').test(it.description))
    const resGas = data.filter(it => new RegExp('Gas').test(it.description))

    const sumFood = resFood.reduce((prev, current) =>{
        return prev + +current.amount
    }, 0)
    const sumFun = resFun.reduce((prev, current) =>{
        return prev + +current.amount
    }, 0)
    const sumGas = resGas.reduce((prev, current) =>{
        return prev + +current.amount
    }, 0)
    
    return (
        <div>
            <Pie
            data={{
                labels: ["Food", "Fun", "Gas"],
                datasets:[{
                    label: 'spends',
                    data: [sumFood, sumFun, sumGas],
                    backgroundColor: [
                        "red", "blue", "yellow"
                    ],
                    // borderColor: [
                    //     'rgba(255, 99, 132, 1)',
                    //     'rgba(54, 162, 235, 1)',
                    //     'rgba(255, 206, 86, 1)',
                    // ],
                }],
            }}

            height={100}
            width={100}
            options={{
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                       ticks: {
                          beginAtZero: true
                       }
                    }]
                 }
            }}
            />
            
        </div>
    )
}

export default PieChart
