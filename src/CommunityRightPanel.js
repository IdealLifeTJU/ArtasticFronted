import React, { Component } from 'react';
import './bootstrap.min.css';
import {Row, Col, Container,Card,Button} from'react-bootstrap';

class CommunityRightPanel extends Component{

    render(){
        return (
            <Container>
                  <br />
            <Row>
                <Card style={{ width: '18rem' }}>

  <Card.Body>
    <Card.Title>Trending</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

            </Row>
            <br />
            <Row>
                <Card style={{ width: '18rem' }}>

  <Card.Body>
    <Card.Title>Something else</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

            </Row>
            <br />
            <Row>
                <Card style={{ width: '18rem' }}>

  <Card.Body>
    <Card.Title>Something Else</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </Row>
</Container>
        );
    }
};
export default CommunityRightPanel;