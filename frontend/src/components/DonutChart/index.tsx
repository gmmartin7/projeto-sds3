import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';
function DonutChart() {

    type ChartData = {
        labels: string[];
        series: number[];
    }
    //forma errada
    let chartData : ChartData = { labels:[], series:[]}

    axios.get(BASE_URL + '/sales/amount-by-seller')
        .then(Response => {
            const data = Response.data as SaleSum[]
            const myLabels = data.map(x => x.sellerName)
            const mySeries = data.map(x => x.sum)
            console.log(Response.data);
        });
    //const mockData = {
      //  series: [477138, 499928, 444867, 220426, 473088],
        //labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    //}
    
    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Chart 
            options={{...options, labels: chartData.labels}}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;
