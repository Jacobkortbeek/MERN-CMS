import React, {Component} from 'react';
import Chart from 'react-apexcharts';

class SkillDesign extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: [
          'HTML', 'CSS/Sass', 'JavaScript', 'ReactJS'
        ],
        fill: {
          colors: ['#fff', '#de2938', '#4082ed', '#49ff7c']
        },
        markers: {
          colors: ['#000']
        },
        dataLabels: {
          style: {
            colors: ['#de2938', '#4082ed']
          }
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['#000'],
          dashArray: 0
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              total: {
                show: true,
                label: 'TOTAL',
                color: '#fff'
              },
              name: {
                show: true
              },
              value: {
                show: true,
                color: '#fff'
              },
            }
          }
        }
      },
      series: [90, 90, 92, 70]
    }
  }

  render() {

    return (< div > <Chart options = {
      this.state.options
    }
    series = {
      this.state.series
    }
    type = "radialBar" width = "100%" / > < /div>);
    }
  }

  export default SkillDesign;
