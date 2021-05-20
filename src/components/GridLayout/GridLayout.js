import React from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0,
};
const GridLayout = (props) => {
  return <Masonry options={masonryOptions}>{props.children}</Masonry>;
};

export default GridLayout;
