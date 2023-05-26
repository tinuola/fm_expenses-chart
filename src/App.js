import React from 'react';
import { useState } from 'react';
import Cell from './Cell';
import Data from './data.json';

export function App() {
  const today = new Date();
  const nameDay = today.getDay();

  const [day, setDay] = useState(nameDay);

  console.log('loaded');

  function checkDate(n) {
    if (n === nameDay) {
      return true;
    }
  }

  return (
    <div className='chart-container'>
      {Data.map((item) => {
        const { id, day, amount } = item;
        let status = checkDate(id);
        // console.log(status);
        return (
          <Cell
            key={id}
            day={day}
            amount={amount}
            active={status}
          />
        );
      })}
    </div>
  );
}
