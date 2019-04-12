import React, {Component} from 'react';
import Chart from 'react-apexcharts';

class SkillLanguages extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: [
          'HTML',
          'CSS/Sass',
          'JavaScript',
          'ReactJS',
          'MongoDB',
          'Node',
          'ExpressJS',
          'WP-PHP',
          'MySQL',
          'Redux',
          'Gulp'
        ],
        title: {
            text: 'My Skills',
            align: 'center',
            offsetY: 50,
            style: {
              fontSize: '1.5em',
              color: '#fff'
            }
          },
        fill: {
          colors: ['#000']
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
          radar: {
            size: 150,
            polygons: {
              strokeColor: '#49ff7c',
              fill: {
                colors: ['#de2938', '#4082ed']
              }
            },
          }
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
            style: {
              color: '#fff'
            }
          }
        }
      },
      series: [
        {
          name: 'seris-1',
          data: [
            90,
            90,
            92,
            70,
            80,
            85,
            72,
            90,
            15,
            60,
            85
          ]
        }
      ]
    }
  }

  render() {

    return (<div className="hundHeight">
      <Chart options={this.state.options} series={this.state.series} height="500" type="radar" className="chartTag" />
    </div>);
  }
}

export default SkillLanguages;
