import React, { Fragment, useEffect } from "react";
import { Form, FormGroup, Input, Button, Container } from "reactstrap";

const AddCourse = () => {
  useEffect(() => {
    document.title = "Add Course";
  }, []);

  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Course Details</h1>
      <Form>
        <FormGroup>
          <label for="userid">Course Id</label>
          <Input
            id="userid"
            name="userid"
            placeholder="Enter here"
            type="text"
          />
        </FormGroup>

        <FormGroup>
          <label for="title"> Course Title</label>
          <Input type="text" placeholder="Enter title here" id="title" />
        </FormGroup>

        <FormGroup>
          <label for="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 100 }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button color="success">Add Course</Button>
          <Button color="warning ml-2">Clear</Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;
