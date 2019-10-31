import React from 'react'
import ProductCollection from '../components/ProductCollection'

class Container extends React.Component {
  
  state = {
    allProductsData: [],
    idx: 0,
    searchTerm: "",
    loggedInUserId: null,
    token: null
  }

  getAllData = () => {
    let data = this.state.allProductsData.slice(this.state.idx, this.state.idx + 10)

    return data
  }

  handleMoreButton = () => {
    console.log("CLICKING BUTTON")
    this.setState({
      idx: this.state.idx + 4
    })
  }
  
  render(){
    return <div>

      <h2>This is the Container</h2>

      <ProductCollection allProducts={this.props.allProducts} addToCart = {this.props.addToCart} handleMoreButton={this.props.handleMoreButton}/>

    </div>

  }
}
export default Container