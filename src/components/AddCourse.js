import React, { Fragment, useEffect, useState } from "react";
import { Form, FormGroup, Input, Button, Container } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AddCourse = () => {
  useEffect(() => {
    document.title = "Add Course";
  }, []);

  const [course, setCourse] = useState({
    id: "",
    title: "",
    description: "",
  });

  // form handlers function
  const handleForm = (e) => {
    console.log(course);
    postDataToServer(course);
    e.preventDefault();
  };

  // creating fnction to post data on server
  const postDataToServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        console.log("Success!");
        toast.success("Course added successfully");
        // Reset the form fields after successful submission
        setCourse({ id: "", title: "", description: "" });
      },
      (error) => {
        console.log(error);
        console.error("Error");
        toast.error("Failed to add course");
      }
    );
  };
  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Course Details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label htmlFor="userid">Course Id</label>
          <Input
            id="userid"
            name="userid"
            placeholder="Enter here"
            type="text"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="title"> Course Title</label>
          <Input
            type="text"
            placeholder="Enter title here"
            id="title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 100 }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success">
            Add Course
          </Button>
          <Button
            type="reset"
            onClick={() => {
              // Reset the fields to empty strings
              setCourse({ id: "", title: "", description: "" });
            }}
            color="warning ml-2"
          >
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;
