import React from 'react';
import { removeFeature } from "../actions/carActions"

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeFeature()} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
