import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import GridLayout from '../../components/GridLayout/GridLayout';
import AlbumCard from '../../components/AlbumCard/AlbumCard';
import Spinner from '../../components/Spinner/Spinner';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';
import * as actions from '../../store/actions/actions';
import * as requests from '../../api/requests';
import defaultAlbum from '../../assets/imgs/defaultAlbum.png';
import classes from './AlbumsPage.module.css';

const AlbumsPage = (props) => {
  const footer = useRef();
  // private states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEnd, setIsEnd] = useState(false);

  // public states
  const currentArtist = useSelector((state) => state.currentArtist);
  const albums = useSelector((state) => state.albums);
  const nextAlbumsUrl = useSelector((state) => state.nextAlbumsUrl);

  // dispatch
  const dispatch = useDispatch();
  const setCurrentArtist = useCallback(
    (currentArtist) => dispatch(actions.setCurrentArtist(currentArtist)),
    [dispatch],
  );
  const setAlbums = useCallback(
    (albums) => dispatch(actions.setAlbums(albums)),
    [dispatch],
  );
  const setNextAlbumsUrl = useCallback(
    (nextAlbumsUrl) => dispatch(actions.setNextAlbumsUrl(nextAlbumsUrl)),
    [dispatch],
  );

  useEffect(() => {
    if (error) return;
    if (!currentArtist) {
      setIsLoading(true);
      requests
        .getArtistById(props.match.params.id)
        .then((res) => {
          console.log(res);
          setCurrentArtist({ id: res.data.id, name: res.data.name });
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
          console.log(err);
        });
    }
    if (!albums) {
      setIsLoading(true);
      requests
        .getArtistAlbums(props.match.params.id, [], 20)
        .then((res) => {
          console.log(res);
          res.data.items.forEach(
            (item) =>
              (item.artists = item.artists.map((artist) => artist.name)),
          );
          setAlbums(res.data.items);
          setNextAlbumsUrl(res.data.next);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
          console.log(err);
        });
    }

    const scrollFct = () => {
      if (footer.current) {
        const { top } = footer.current.getBoundingClientRect();

        if (top <= window.innerHeight + 100) {
          if (!isEnd) {
            setIsEnd(true);
            if (nextAlbumsUrl) {
              requests
                .getNext(nextAlbumsUrl)
                .then((res) => {
                  console.log(res);
                  res.data.items.forEach(
                    (item) =>
                      (item.artists = item.artists.map(
                        (artist) => artist.name,
                      )),
                  );
                  setAlbums([...albums, ...res.data.items]);
                  setNextAlbumsUrl(res.data.next);
                  setIsEnd(false);
                })
                .catch((err) => {
                  setIsLoading(false);
                  setIsEnd(false);
                  setError(err);
                  console.log(err);
                });
            }
          }
        }
      }
    };
    window.addEventListener('scroll', scrollFct);
    return () => {
      window.removeEventListener('scroll', scrollFct);
    };
  }, [
    props,
    isEnd,
    currentArtist,
    albums,
    nextAlbumsUrl,
    error,
    setNextAlbumsUrl,
    setCurrentArtist,
    setAlbums,
  ]);

  let albumCards = albums?.map((album) => (
    <AlbumCard
      key={uuidv4()}
      image={album.images[1]?.url || defaultAlbum}
      name={album.name}
      artists={album.artists}
      tracks={album.total_tracks}
      date={album.release_date}
      preview={album.external_urls.spotify}
    />
  ));

  let gridLayout;

  if (albumCards) {
    gridLayout = albumCards.length ? (
      <GridLayout>{albumCards}</GridLayout>
    ) : (
      <h1>No Albums yet</h1>
    );
  }

  let body = isLoading ? <Spinner /> : gridLayout;
  let footerContent = isEnd ? (
    nextAlbumsUrl ? (
      <Spinner />
    ) : (
      <h3>You've Reached the End</h3>
    )
  ) : null;

  return (
    <section className={classes.AlbumsPage}>
      <ErrorHandler error={error}>
        <div className={classes.intro}>
          <h1>{currentArtist?.name}</h1>
          <span>Albums</span>
        </div>
        {body}
      </ErrorHandler>
      <footer className={classes.footer} ref={footer}>
        {footerContent}
      </footer>
    </section>
  );
};

export default AlbumsPage;
