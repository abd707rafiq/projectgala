import React from 'react';
import Card from '../cards/Card';
import data from './data';
import './Mian.css';

const Main = () => {
  return (
    <div className='App'>
      <div className="card-container">
      <Card {...data[0]} />
            <Card {...data[1]} />
            <Card {...data[2]} />
        <div className="card-row">
          
          <div className="row-column">
            <Card {...data[3]} />
          </div>
          <div className="row-column">
            <Card {...data[4]} />
            <Card {...data[5]} />
          </div>
          <div className="row-column">
            <Card {...data[6]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
