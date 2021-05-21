import React from 'react';
import classes from './AlbumCard.module.css';

const AlbumCard = (props) => {
  return (
    <div className={classes.AlbumCard}>
      <div className={classes.albumGrid}>
        <div className={classes.imgContainer}>
          <img src={props.image} alt={props.name} />
        </div>
        <a
          className={classes.preview}
          href={props.preview}
          target='_blank'
          rel='noreferrer'
        >
          <span>Preview on Spotify</span>
        </a>
      </div>
      <div className={classes.main}>
        <h5 className={classes.name}>{props.name}</h5>
        <p className={classes.artists}>{props.artists.join(' ')}</p>
        <p className={classes.date}>{props.date}</p>
        <p className={classes.tracks}>{props.tracks} tracks</p>
      </div>
    </div>
  );
};

export default AlbumCard;
