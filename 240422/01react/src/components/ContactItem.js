import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = ({ item }) => {
  return (
    <Row>
      <Col lg={2}>
        <img
          width={50}
          src="https://i.pinimg.com/236x/2f/55/97/2f559707c3b04a1964b37856f00ad608.jpg"
          alt="profile"
        />
      </Col>
      <Col lg={10}>
        <div>{item?.name}</div>
        <div>{item?.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
