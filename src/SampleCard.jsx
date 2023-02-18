import React, {Component} from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SampleCard(props) {
    return ( 
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://charmouth.org/charmouth_village/wp-content/uploads/2016/07/SE3.jpg" />
      <Card.Body>
        <Card.Title>{props.firstName}</Card.Title>
        <Card.Text>
          {props.lastName}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    );
}

export default SampleCard;