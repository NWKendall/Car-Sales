import React from 'react';
import { connect } from "react-redux";

import { updateTotal } from "../actions/totalActions"

const AdditionalFeature = props => {
  console.log(`additonal feature`, props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        className="button"
        onClick={() => props.updateTotal(props.feature.price)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect (null, {updateTotal} )(AdditionalFeature);
