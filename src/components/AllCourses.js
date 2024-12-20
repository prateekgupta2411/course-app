import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
const Allcourse = () => {
  useEffect(() => {
    document.title = "All Courses";
  }, []);

  // function to call server
  const getAllCoursesFromServer = () => {
    axios.get("/courses").then(
      (response) => {
        // success
        console.log(response);
      },
      (error) => {
        // for error
        console.error(error);
      }
    );
  };
  // call server function when component mounts
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const [courses, setCourses] = useState([
    { title: "React Course", description: "This is React course" },
    { title: "Node.js Course", description: "This is Node.js course" },
    { title: "Python Course", description: "This is Python course" },
    { title: "Java Course", description: "This is java course" },
  ]);

  return (
    <div>
      <h1> All Courses </h1>
      <p> List of courses are as follows</p>

      {courses.length > 0
        ? courses.map((item) => <Course key={item.id} course={item} />)
        : "no courses"}
    </div>
  );
};

export default Allcourse;
