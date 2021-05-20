import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import SearchBar from '../../components/SearchBar/SearchBar';
import GridLayout from '../../components/GridLayout/GridLayout';
import * as actions from '../../store/actions/actions';
import * as requests from '../../api/requests';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import Spinner from '../../components/Spinner/Spinner';
import defaultArtist from '../../assets/imgs/defaultArtist.png';
import classes from './ArtistsPage.module.css';

const ArtistsPage = (props) => {
  const footer = useRef();

  // private states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEnd, setIsEnd] = useState(false);

  // public states
  const artists = useSelector((state) => state.artists);
  const lastSearch = useSelector((state) => state.lastSearch);
  const currentArtist = useSelector((state) => state.currentArtist);
  const albums = useSelector((state) => state.albums);
  const nextArtistsUrl = useSelector((state) => state.nextArtistsUrl);

  // dispatch
  const dispatch = useDispatch();

  const setArtists = useCallback(
    (artists) => dispatch(actions.setArtists(artists)),
    [dispatch],
  );
  const removeArtists = () => dispatch(actions.removeArtists());
  const setLastSearch = (lastSearch) =>
    dispatch(actions.setLastSearch(lastSearch));
  const setCurrentArtist = (currentArtist) =>
    dispatch(actions.setCurrentArtist(currentArtist));
  const removeCurrentArtist = useCallback(
    () => dispatch(actions.removeCurrentArtist()),
    [dispatch],
  );
  const removeAlbums = useCallback(
    () => dispatch(actions.removeAlbums()),
    [dispatch],
  );
  const setNextArtistsUrl = useCallback(
    (nextArtistsUrl) => dispatch(actions.setNextArtistsUrl(nextArtistsUrl)),
    [dispatch],
  );

  useEffect(() => {
    if (albums) removeAlbums();
    if (currentArtist) removeCurrentArtist();
    const scrollFct = () => {
      if (footer.current) {
        const { top } = footer.current.getBoundingClientRect();

        if (top <= window.innerHeight + 100) {
          if (!isEnd) {
            setIsEnd(true);
            if (nextArtistsUrl) {
              requests
                .getNext(nextArtistsUrl)
                .then((res) => {
                  console.log(res);
                  setNextArtistsUrl(res.data.artists.next);
                  setArtists([...artists, ...res.data.artists.items]);
                  setIsEnd(false);
                })
                .catch((err) => console.log(err));
            }
          }
        }
      }
    };
    console.log('create');
    window.addEventListener('scroll', scrollFct);
    return () => {
      console.log('remove');
      window.removeEventListener('scroll', scrollFct);
    };
  }, [
    isEnd,
    artists,
    currentArtist,
    albums,
    nextArtistsUrl,
    setNextArtistsUrl,
    setArtists,
    removeCurrentArtist,
    removeAlbums,
  ]);

  const search = (value) => {
    if (!value) {
      removeArtists();
      setLastSearch(value);
      return;
    }
    setIsLoading(true);
    requests
      .getSearch(value, ['artist'], 20)
      .then((res) => {
        console.log(res);
        setArtists(res.data.artists.items);
        setLastSearch(value);
        setIsLoading(false);
        setNextArtistsUrl(res.data.artists.next);
      })
      .catch((err) => console.log(err));
  };

  const goToArtist = (artist) => {
    setCurrentArtist({ id: artist.id, name: artist.name });
    props.history.push(`/albums/${artist.id}`);
  };

  let artistCards = artists?.map((artist) => (
    <ArtistCard
      key={uuidv4()}
      redirect={() => goToArtist(artist)}
      image={artist.images[1]?.url || defaultArtist}
      name={artist.name}
      followers={artist.followers.total}
      rating={artist.popularity / 20}
    />
  ));

  let gridLayout = <GridLayout>{artistCards}</GridLayout>;

  let body = isLoading ? <Spinner className={'fixed'} /> : gridLayout;
  let footerContent = isEnd ? (
    nextArtistsUrl ? (
      <Spinner />
    ) : (
      <h3>You've Reached the End</h3>
    )
  ) : null;

  return (
    <section className={classes.ArtistsPage}>
      <div className={classes.searchBox}>
        <SearchBar search={search} lastSearch={lastSearch} />
      </div>
      <p className={classes.searchText}>
        {artistCards
          ? artistCards.length
            ? `Showing results for '${lastSearch}'`
            : `No Results Found for '${lastSearch}'`
          : 'Type anything in the search box to get started!'}
      </p>
      {body}
      <footer className={classes.footer} ref={footer}>
        {footerContent}
      </footer>
    </section>
  );
};

export default ArtistsPage;
