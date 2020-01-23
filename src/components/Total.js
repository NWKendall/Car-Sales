import React from 'react';
import { connect } from "react-redux";

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalFeatures.price}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
    car: state.rootReducer.car,
    additionalFeatures: state.rootReducer.additionalFeatures
  } 
}
export default connect (mapStateToProps, {})(Total);
