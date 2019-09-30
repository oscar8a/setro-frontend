import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './containers/Container'
import Navigation from './components/Navigation'

const URL = 'http://localhost:3000/products/'

class App extends React.Component {

  state = {
    allProductsData: [],
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

  // listData = (data) => {
  //   data.map(singleData => {
  //     console.log(singleData)
  //   })
  // }

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
        <header className='App-header' >
          <Navigation />
        </header>
        
  
          <Container allProducts={this.state.allProductsData}/>
          
      </div>
    )
  }

}

export default App;
