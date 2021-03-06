import React from 'react';
import { Link } from 'react-router-dom';

import CollectionItem from '../CollectionItem/CollectionItem';

import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <Link className='title' to={`/shop/${title.toLowerCase()}`}>
        <h2>{title.toUpperCase()}</h2>
      </Link>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
