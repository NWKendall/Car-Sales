import React from 'react';
import { connect } from "react-redux";

const Total = props => {
  console.log(`TOTAL PROPS`, props.additionalPrice)
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.rootReducer.additionalPrice,
    car: state.rootReducer.car
  } 
}
export default connect (mapStateToProps, {})(Total);
