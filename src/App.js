import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './containers/Container'
import Navigation from './components/Navigation'

const URL = 'http://localhost:3000/products/'

class App extends React.Component {

  state = {
    allProductsData: []
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


  render(){
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
