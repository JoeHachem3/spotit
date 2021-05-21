import React from 'react';
import classes from './ErrorHandler.module.css';

const ErrorHandler = (props) => {
  let body = props.children;
  if (props.error) {
    body = (
      <div className={classes.ErrorHandler}>
        <h1>{props.error.message}</h1>
        <p>Oops... Something went wrong, try again later!</p>
      </div>
    );
  }
  return body;
};

export default ErrorHandler;
