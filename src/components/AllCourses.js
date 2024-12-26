import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourse = () => {
  const [courses, setCourses] = useState([]);
  const updateCourses = (id) => {
    setCourses(courses.filter((c) => c.id != id));
  };
  // Set the document title
  useEffect(() => {
    document.title = "All Courses";
  }, []);

  // Function to fetch courses from the server
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        // Success: Update the state with fetched data
        console.log(response.data);
        toast.success("courses has been loaded successfully", {
          position: "bottom-center",
        });
        setCourses(response.data);
      },
      (error) => {
        // Error: Log the error
        console.error("Error fetching courses:", error);
        toast.success("server down", {
          position: "bottom-center",
        });
      }
    );
  };

  // Fetch courses when the component mounts
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  return (
    <div>
      <h1>All Courses</h1>
      <p>List of courses are as follows:</p>

      {courses.length > 0 ? (
        courses.map((item) => (
          <Course key={item.id} course={item} update={updateCourses} />
        ))
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  );
};

export default Allcourse;
