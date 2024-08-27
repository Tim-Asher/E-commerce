import React from "react";
import { Row } from "react-bootstrap";
import ItemCard from "./ItemCard";
import items from "./../itemsList";

const ItemsList = () => {
  return (
    <div>
      <Row className="row-gap-3">
        {items?.map((item) => (
          <ItemCard key={item.title} item={item} />
        ))}
      </Row>
    </div>
  );
};

export default ItemsList;
