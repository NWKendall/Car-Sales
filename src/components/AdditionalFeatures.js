import React from 'react';
import { connect } from "react-redux";

import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.addFeaturesProps.length ? (
        <ol type="1">
          {props.addFeaturesProps.map(item => (
            <AdditionalFeature 
              key={item.id} 
              feature={item} 
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    addFeaturesProps: state.rootReducer.additionalFeatures
  }
}

export default connect (
  mapStateToProps, 
  {}
  )(AdditionalFeatures);
