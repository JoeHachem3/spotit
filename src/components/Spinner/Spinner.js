import React from 'react';
import classes from './Spinner.module.css';
import logo from '../../assets/imgs/spotifyLogo.svg';

const Spinner = (props) => {
  return (
    <>
      <img
        src={logo}
        alt=''
        className={[classes.Spinner, classes[props.className]].join(' ')}
      />
    </>
  );
};

export default Spinner;
