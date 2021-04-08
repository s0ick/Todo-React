import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const days = ['Sun','Mon','Tues','Wed','Thurs','Frid','Sat'];

Date.prototype.getWeek = function() {
  let onejan = new Date(this.getFullYear(),0,1);
  return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7) - 1;
};

const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
  if(value) {
    return <text x={x + width / 2} y={y+30} fill="#000" textAnchor="middle" dy={-6}>{`${value}`}</text>;
  }
  else return <text></text>
};

export default class BarChartClass extends PureComponent {
  state = {
    data: [
      { name: 'Sun', count: 0 },
      { name: 'Mon', count: 0 },
      { name: 'Tues', count: 0 },
      { name: 'Wed', count: 0 },
      { name: 'Thurs', count: 0 },
      { name: 'Frid', count: 0 },
      { name: 'Sat', count: 0 }
    ]
  }

  setData() {
    let currentDate = new Date();

    let sun = 0, mon = 0, tues = 0, wed = 0, thurs = 0, frid = 0, sat = 0; //counters

    this.props.data.forEach((elem) => {
      let elemDate = new Date(elem.dateCompleted);
      if(elem.completed && 
        currentDate.getWeek() === elemDate.getWeek() && 
        currentDate.getFullYear() === elemDate.getFullYear()) {
          switch(elemDate.getDay()) {
            case 0: sun++; break;
            case 1: mon++; break;
            case 2: tues++; break;
            case 3: wed++; break;
            case 4: thurs++; break;
            case 5: frid++; break;
            case 6: sat++; break;
            default: break;
          }
      }
    });

    this.setState({
      data: [
        { name: 'Sun', count: sun },
        { name: 'Mon', count: mon },
        { name: 'Tues', count: tues },
        { name: 'Wed', count: wed },
        { name: 'Thurs', count: thurs },
        { name: 'Frid', count: frid },
        { name: 'Sat', count: sat }
      ]
    })
  }

  componentWillMount() {
    this.setData();
  }

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={this.state.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="count" fill="#a7ffeb" background={{ fill: '#37474f' }} 
            label={renderCustomBarLabel}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}