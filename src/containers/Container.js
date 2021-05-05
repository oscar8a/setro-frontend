import React from 'react';
import ProductCollection from '../components/ProductCollection';
import Navigation from '../components/Navigation';
import IntroText from '../components/Text/IntroText';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';

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
    // this.props.fetchProducts();
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
      console.log(data)
      this.setState({
        allProductsData: data
      })
    })
  }

  getData(){
    let seedproducts = this.state.allProductsData.slice(this.state.idx, this.state.idx + 6)

    return seedproducts
  }

  navigateProduct = (e) => {
    if (e.target.value === "+" && (this.state.idx < this.state.allProductsData.length - 6)) {
      this.setState({
        idx: this.state.idx + 6
      })
    } else if (e.target.value === "-" && this.state.idx > 0) {
      this.setState({
        idx: this.state.idx - 6
      })
    }
  }
  
  render(){

    return <div className="containerdiv">
      <IntroText />
      <ProductCollection allProducts={this.getData()} navigateProduct={this.navigateProduct} addToCart = {this.props.addToCart}/>
    </div>
  }
}
export default connect((state) => ({products: state.allProductsData}), {fetchProducts})(Container)