import React from 'react';

const Cell = ({ day, amount }) => {
  let height = Math.ceil(amount);

  const cellStyle = {
    height: height * 2.85 + 'px',
  };

  return (
    <div className='chart-cell__wrapper'>
      <div
        className='chart-cell__bground font-1'
        data-amount={`$${amount}`}
        style={cellStyle}></div>
      <p>{day}</p>
    </div>
  );
};

export default Cell;
