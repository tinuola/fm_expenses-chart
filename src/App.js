import React from 'react';
import Cell from './Cell';
import Data from './data.json';

export function App() {
  return (
    <div className='chart-container'>
      {/* <h1>Hello world again!</h1> */}
      {Data.map((item) => {
        const { id, day, amount } = item;
        return <h2>{id}</h2>;
      })}
    </div>
  );
}