import React, { Fragment } from "react";
import Card from 'react-bootstrap/Card'

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

    <Card>
    <Card.Body>
      <Card.Title>{props.product.species}</Card.Title>
      <Card.Text>
        {props.product.common_name}
        <br></br>
        {props.product.origin} | {props.product.country}
      </Card.Text>
    </Card.Body>

    </Card>
  </Fragment>


}
export default Product