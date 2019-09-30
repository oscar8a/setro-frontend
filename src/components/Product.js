import React, { Fragment } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Product = (props) => {

  return <Fragment >
    {/* <div>
        <h4> {props.product.species} </h4>
        <img src='' alt={props.product.common_name} />
        <div>
          <p>
          {props.product.origin} | {props.product.country}
          </p>
        </div>

        <CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

    </div> */}

    <Card class='card'bg="success">
    <Card.Body>
      <Card.Title>{props.product.species}</Card.Title>
      <Card.Text>
        {props.product.common_name}
        <br></br>
        {props.product.origin} | {props.product.country}
      </Card.Text>
    </Card.Body>
      <Button variant="light"> ADD TO <span role='img' aria-label="cart">🛒</span></Button>
    </Card>
  </Fragment>


}
export default Product