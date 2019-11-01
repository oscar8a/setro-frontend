import React from 'react';
import ProductCollection from '../components/ProductCollection';
import Navigation from '../components/Navigation'

class Container extends React.Component {

  state = {
    allProductsData: [],
    idx: 0,
    searchTerm: "",
    loggedInUserId: null,
    token: null
  }

  fetchAllData = () => {
    fetch('http://localhost:3000/products', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        Accept: 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        allProductsData: data
      })
    })
  }

  getData(){
    let seedproducts = this.state.allProductsData.slice(this.state.idx, this.state.idx + 10)

    return seedproducts
  }

  handleMoreButton = () => {
    console.log("CLICKING BUTTON")
    this.setState({
      idx: this.state.idx + 4
    })
  }
  
  render(){
    this.fetchAllData();

    return <div>
      <h2>This is the Container</h2>
      <h1>STATUS: {this.props.loginStatus}</h1>

      {/* <ProductCollection allProducts={this.props.allProducts} addToCart = {this.props.addToCart} handleMoreButton={this.props.handleMoreButton}/> */}

    </div>

  }
}
export default Container