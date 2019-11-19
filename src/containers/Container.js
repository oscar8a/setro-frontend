import React from 'react';
import ProductCollection from '../components/ProductCollection';
import Navigation from '../components/Navigation';

class Container extends React.Component {

  state = {
    allProductsData: [],
    idx: 0,
    searchTerm: "",
    loggedInUserId: null,
    token: null
  }

  componentDidMount(){
    this.fetchAllData();
  }

  fetchAllData = () => {
    fetch('http://localhost:3000/products', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        'Content-Type': 'application/json',
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
    let seedproducts = this.state.allProductsData.slice(this.state.idx, this.state.idx + 6)

    return seedproducts
  }

  handleMoreButton = () => {
    console.log("CLICKING BUTTON")
    this.setState({
      idx: this.state.idx + 6
    })
  }
  
  render(){

    return <div className="containerdiv">
      <h2>Welcome to our Online Seed Store</h2>
      <p>Feel free to look at our catalogue of tree seeds available</p>
      <ProductCollection allProducts={this.getData()} handleMoreButton={this.handleMoreButton} addToCart = {this.props.addToCart}/>
    </div>
  }
}
export default Container