import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ReactBS(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} alt=""/>
      <Card.Body>
        <Card.Title>{props.type}</Card.Title>
        <Card.Title>{props.age}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ReactBS;