import React from 'react';
import classes from './ArtistCard.module.css';

const ArtistCard = (props) => {
  const flooredRating = Math.floor(props.rating);
  const rating = [];
  for (let i = 1; i <= 5; i++) {
    if (i < flooredRating) {
      rating.push(
        <div key={i} style={{ background: 'var(--color-bright-green)' }}></div>,
      );
    } else if (i < props.rating) {
      const percentage = (props.rating - flooredRating) * 100;
      rating.push(
        <div
          key={i}
          style={{
            background: `linear-gradient(90deg, var(--color-bright-green) ${percentage}%, var(--color-gray) ${
              100 - percentage
            }%)`,
          }}
        ></div>,
      );
    } else {
      rating.push(
        <div key={i} style={{ background: 'var(--color-gray)' }}></div>,
      );
    }
  }

  return (
    <div className={classes.ArtistCard} onClick={props.redirect}>
      <div className={classes.imgContainer}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={classes.main}>
        <h5 className={classes.name}>{props.name}</h5>
        <p className={classes.followers}>{props.followers} followers</p>
        <div className={classes.rating}>{rating}</div>
      </div>
    </div>
  );
};

export default ArtistCard;
