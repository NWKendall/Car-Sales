import React from 'react';
import { connect } from "react-redux";

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.featuresProps.length ? (
        <ol type="1">
          {props.featuresProps.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    featuresProps: state.rootReducer.car.features
  }
}

export default connect(mapStateToProps, 
{}
)(AddedFeatures);
