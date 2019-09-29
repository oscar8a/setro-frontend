import React, { Fragment } from "react";
import Product from './Product'

const ProductCollection = (props) => {

  return(
    <Fragment>
      <h3> this is the Product Collection</h3>
      {props.allProducts.map(singleProduct => <Product product={singleProduct} key={singleProduct.id} />)}


      {/* {
          props.allSushi.map(sushi => <Sushi sushi={sushi} handleEatSushi={props.handleEatSushi} />)
        } */}

    </Fragment>
  )
}
export default ProductCollection