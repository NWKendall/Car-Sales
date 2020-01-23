import React from 'react';
import { connect } from "react-redux";

import { removeFeature } from "../actions/carActions"

const AddedFeature = props => {
  console.log(props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => removeFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {})(AddedFeature);
