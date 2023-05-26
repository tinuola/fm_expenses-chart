import React from 'react';
import Cell from './Cell';
import Data from './data.json';

export function App() {
  return (
    <div className='chart-container'>
      {Data.map((item) => {
        const { id, day, amount } = item;
        return (
          <Cell
            key={id}
            day={day}
            amount={amount}
          />
        );
      })}
    </div>
  );
}
