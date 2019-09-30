import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './containers/Container'

const URL = 'http://localhost:3000/products/'

class App extends React.Component {

  state = {
    allProductsData: [],
    idx: 0,
    searchTerm: ""
  }

  componentDidMount(){
    fetch(URL)
    .then(response => response.json())
    .then(data => {
      this.setState({
        allProductsData: data
      })
    })
  }

  handleMoreButton = () => {
    console.log("CLICKING BUTTON")
    this.setState({
      idx: this.state.idx + 4
    })
  }

  getAllData = () => {
    let data = this.state.allProductsData.slice(this.state.idx, this.state.idx + 20)

    return data
  }

  // handleChange = event => {
  //   this.setState({ searchTerm: event.target.value });
  // };

  render(){

    // const { data, searchTerm } = this.state;

    // const lowercasedFilter = searchTerm.toLowerCase();

    // console.log(data)
    // console.log(searchTerm)
    // console.log(lowercasedFilter)

    // const productsToShow = data.filter(p => {
    //   return Object.keys(p).some(key =>
    //     p[key].toLowerCase().includes(lowercasedFilter)
    //   );
    // });

      //p.name.includes(lowercasedFilter)
        


    return (
      <div className="App">
          <Container allProducts={this.getAllData()} handleMoreButton={this.handleMoreButton}/>
      </div>
    )
  }

}

export default App;
