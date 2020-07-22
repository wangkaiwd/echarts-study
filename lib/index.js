import echarts from 'echarts';

const main = document.getElementById('main');
// based on prepared DOM, initialize echarts instance
// 第二个参数配置主题
const myChart = echarts.init(main, 'dark');

// specify chart configuration item and data
const option = {
  title: {
    text: 'ECharts entry example'
  },
  tooltip: {},
  legend: {
    data: ['Sales']
  },
  xAxis: {
    data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks']
  },
  yAxis: {},
  series: [{
    name: 'Sales',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
};
myChart.on('click', (params) => {
  console.log('click', params);
});
// use configuration item and data specified to show chart
myChart.setOption(option);
