import React from 'react';

const Cell = ({ day, amount, active }) => {
  let height = Math.ceil(amount);

  const setCellHeight = {
    height: height * 2.85 + 'px',
  };

  return (
    <div className='chart-cell__wrapper'>
      <div
        className={`chart-cell__bground ${
          active ? 'chart-cell__bground--active' : 'chart-cell__bground--default'
        } font-1 `}
        data-amount={`$${amount}`}
        style={setCellHeight}></div>
      <p>{day}</p>
    </div>
  );
};

export default Cell;
