import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
  Container,
} from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../api/bootapi";

const Course = ({ course, update }) => {
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.success("Course deleted successfully");
        update(id);
      },
      (error) => {
        toast.error(
          "Course not deleted, some server problem. Try after some time."
        );
      }
    );
  };
  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle tag="h5">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button
            color="danger"
            onClick={() => {
              deleteCourse(course.id); // Call the function with the course ID
            }}
          >
            delete
          </Button>
          <Button color="warning ml-3">Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
