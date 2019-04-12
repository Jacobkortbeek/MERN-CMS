import React, {Component} from 'react';
import Chart from 'react-apexcharts';

class SkillLearning extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: [
          'MongoDB', 'ExpressJS', 'ReactJS', 'Node'
        ],
        colors: [
          '#de2938', '#4082ed', '#E91E63', '#9C27B0'
        ],
        legend: {
          position: 'right',
          labels: {
            colors: ['#fff'],
            useSeriesColors: false
          }
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                  show: true
                },
                offsetX: 2000,
                offsetY: 1000,
                value: {
                  show: true,
                  color: '#fff'
                },
                total: {
                  show: true,
                  label: 'MERN Completion /400%',
                  color: '#fff'
                }
              }
            }
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'left',
                labels: {
                  colors: ['#fff'],
                  useSeriesColors: true
                }
              }
            }
          }
        ],
        style: {
          color: '#fff'
        }
      },
      series: [78, 69, 85, 95]
    }

  }

  render() {

    return (< div > <Chart options = {
      this.state.options
    }
    series = {
      this.state.series
    }
    type = "donut" width = "100%" / > < /div>);
    }
  }

  export default SkillLearning;
