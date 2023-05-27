import React from 'react';

const Cell = ({ day, amount, currentDay }) => {
  let height = Math.ceil(amount);

  const cellHeight = {
    height: height * 2.85 + 'px',
  };

  return (
    <div className='chart-cell__wrapper'>
      <div
        className={`chart-cell__bground ${
          currentDay ? 'chart-cell__bground--current-day' : 'chart-cell__bground--default'
        } font-1 `}
        data-amount={`$${amount}`}
        style={cellHeight}></div>
      <p>{day}</p>
    </div>
  );
};

export default Cell;
