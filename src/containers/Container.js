import React from "react";
import ProductCollection from "../components/ProductCollection";
import Navigation from "../components/Navigation";
import IntroText from "../components/Text/IntroText";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";

class Container extends React.Component {
  state = {
    // allProductsData: [],
    idx: 0,
    searchTerm: "",
    loggedInUserId: null,
    token: null,
  };

  componentDidMount() {
    this.props.fetchProducts(); // Uses redux: FETCH_PRODUCTS action
    // this.fetchAllData(); // Uses Class function fetchAllData
  }

  fetchAllData = () => {
    fetch("http://localhost:3000/products", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("fetchAllData() returns:", data);
        this.setState({
          allProductsData: data,
        });
      });
  };

  getData(allProducts) {
    let currentProducts = allProducts.slice(this.state.idx, this.state.idx + 6);

    return currentProducts;
  };

  navigateProduct = (e) => {
    if (
      e.target.value === "+" &&
      this.state.idx < this.props.allProductsData.length - 6
    ) {
      this.setState({
        idx: this.state.idx + 6,
      });
    } else if (e.target.value === "-" && this.state.idx > 0) {
      this.setState({
        idx: this.state.idx - 6,
      });
    }
  };

  render() {
    return (
      <div className="containerdiv">
        <IntroText />
        <ProductCollection
          allProducts={this.getData(this.props.allProductsData || [])}
          navigateProduct={this.navigateProduct}
          addToCart={this.props.addToCart}
        />
      </div>
    );
  }
}
export default connect((state) => ({ allProductsData: state.products.items }), {
  fetchProducts,
})(Container);
