import React from 'react';
import Cell from './Cell';
import Data from './data.json';

export function App() {
  const today = new Date();

  const nameDay = today.getDay();

  function checkDayOfWeek(n) {
    return n === nameDay || (nameDay === 0 && n === 7);
  }

  return (
    <div className='chart-container'>
      {Data.map((item) => {
        const { id, day, amount } = item;
        let status = checkDayOfWeek(id);

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
