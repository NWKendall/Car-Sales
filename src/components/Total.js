import React from 'react';
import { connect } from "react-redux";



const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPriceOnProps}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPriceOnProps: state.totalReducer.additionalPrice
  }
}

export default connect (mapStateToProps)(Total);
