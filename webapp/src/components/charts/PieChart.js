import React from 'react';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

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
                }],
            }}

            height={300}
            width={300}
            options={{
                maintainAspectRatio: false,
            }}
            />
            
        </div>
    )
}

export default PieChart
