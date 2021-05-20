import React from 'react';
import classes from './AlbumCard.module.css';

const AlbumCard = (props) => {
  return (
    <div className={classes.AlbumCard}>
      <div className={classes.albumProps}>
        <div className={classes.imgContainer}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.main}>
          <h5 className={classes.name}>{props.name}</h5>
          <p className={classes.artists}>{props.artists.join(' ')}</p>
          <p className={classes.date}>{props.date}</p>
          <p className={classes.tracks}>{props.tracks} tracks</p>
        </div>
      </div>
      <a className={classes.preview} href={props.preview}>
        <span>Preview on Spotify</span>
      </a>
    </div>
  );
};

export default AlbumCard;
