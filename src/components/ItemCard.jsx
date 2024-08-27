import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ItemCard({ item }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 text-center">
      <Card bg="dark-subtle" className="h-100">
        <Card.Img variant="top" src="./images/items/Designer (5).png" />
        <Card.Body className=" p-0 ">
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Body className="d-flex align-items-center justify-content-between mx-1">
            <Card.Body className="d-flex fs-5">
              {item.sale ? (
                <Card.Text className="m-0 me-3 text-decoration-line-through text-danger ">{`$${item.price}`}</Card.Text>
              ) : (
                <Card.Text className="m-0 me-3">{`$${item.price}`}</Card.Text>
              )}
              {item.sale ? <Card.Text>{`$${item.sale}`}</Card.Text> : <></>}
            </Card.Body>
            <Button variant="success">Buy Now</Button>
          </Card.Body>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemCard;
