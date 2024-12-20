import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Menus = () => {
  return (
    <ListGroup>
      <ListGroupItem tag={Link} to="/" action>
        Home
      </ListGroupItem>
      <ListGroupItem tag={Link} to="/add-course" action>
        Add Course
      </ListGroupItem>
      <ListGroupItem tag={Link} to="/view-courses" action>
        View Courses
      </ListGroupItem>
      <ListGroupItem tag={Link} to="#!" action>
        About
      </ListGroupItem>
      <ListGroupItem tag={Link} to="#!" action>
        Contact
      </ListGroupItem>
    </ListGroup>
  );
};

export default Menus;
