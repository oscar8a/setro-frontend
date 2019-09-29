import React, { Fragment } from "react";

const Product = (props) => {

  return <Fragment >
    <div>
        <h4> {props.product.species} </h4>
        <img src='' alt={props.product.common_name} />
        <div>
          <p>
          {props.product.origin} | {props.product.country}
          </p>
        </div>

    </div>


  </Fragment>


}
export default Product