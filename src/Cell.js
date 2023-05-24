import React from 'react';

const Cell = ({ day, amount }) => {
  let height = Math.ceil(amount);
  // let cell = document.querySelector('.chart-cell__bground');
  // cell.style.height = `${height}px`;
  return (
    <div className='chart-cell__wrapper'>
      <div
        className='chart-cell__bground'
        data-height={height}></div>
      <p className='font-1'>{day}</p>
    </div>
  );
};

export default Cell;
