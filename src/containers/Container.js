import React from 'react'
import ProductCollection from '../components/ProductCollection'

class Container extends React.Component {
  
  render(){
    return <div>

      <h2>This is the Container</h2>

      <ProductCollection allProducts={this.props.allProducts}/>

    </div>

  }
}
export default Container