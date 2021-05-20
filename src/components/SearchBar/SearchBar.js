import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import searchIcon from '../../assets/imgs/search.svg';
import classes from './SearchBar.module.css';

const SearchBar = (props) => {
  const searchInput = useRef();

  const lastSearch = useSelector((state) => state.lastSearch);

  const [searchValue, setSearchValue] = useState(props.lastSearch);
  const onChange = (event) => {
    setSearchValue(event.target.value);
    const value = event.target.value.trim();
    setTimeout(() => {
      if (searchInput.current) {
        const currentValue = searchInput.current.value.trim();
        console.log(value);
        console.log(currentValue);
        if (currentValue !== lastSearch && value === currentValue) {
          props.search(value);
        }
      }
    }, 500);
  };

  const search = (event) => {
    event.preventDefault();
    if (searchInput.current) {
      const currentValue = searchInput.current.value.trim();
      if (currentValue) {
        props.search(currentValue);
      }
    }
  };

  return (
    <form onSubmit={search} className={classes.SearchBar}>
      <input
        ref={searchInput}
        id='searchInput'
        type='text'
        value={searchValue}
        placeholder='Search for an artist...'
        onChange={onChange}
      />
      <img src={searchIcon} alt='' onClick={search} />
    </form>
  );
};

export default SearchBar;
