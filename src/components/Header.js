import React from "react";
import { Container } from "reactstrap";

const Home = () => {
  return (
    <div>
      <br />
      <Container
        style={{
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <h3 className="display-2">GeeksforGeeks!</h3>
        <hr />
        <p className="display-3">
          A Computer Science portal for geeks. It contains well-written, well-
          thought, and well-explained computer science and programming articles
          and quizzes.
        </p>
      </Container>
    </div>
  );
};

export default Home;
