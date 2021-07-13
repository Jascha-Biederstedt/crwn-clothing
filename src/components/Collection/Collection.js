import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../CollectionItem/CollectionItem';
import { selectCollection } from '../../redux/shop/shop-selectors';

import './Collection.scss';

const Collection = ({ collection }) => {
  console.log(collection);
  return (
    <div className='collection-page'>
      <h2>Collection page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
