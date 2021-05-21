import React from 'react';
import classes from './Back.module.css';

const Back = (props) => {
  return (
    <button
      className={[classes.Back, classes[props.className]].join(' ')}
      onClick={props.onClick}
    >
      {'Back'}
    </button>
  );
};

export default Back;
