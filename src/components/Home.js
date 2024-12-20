import React, { useEffect } from "react";
import { Container, Button } from "reactstrap";

const Home = () => {
  useEffect(() => {
    document.title = "Home || Hello Prateek!";
  }, []);

  return (
    <div>
      <br />
      <Container
        className="text-center"
        style={{
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <h3>Hello Guys</h3>
        <p>This is Prateek and the author of Java langauge</p>
        <Button color="primary" outline>
          Visit My Website
        </Button>
      </Container>
    </div>
  );
};

export default Home;
