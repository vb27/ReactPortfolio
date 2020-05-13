import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://s3.eu-central-1.amazonaws.com/img.hromadske.ua/posts/images/000/029/497/medium/5.gif">
        <h1>Paul Lee's Portfolio</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>Hi I'm Paul!</p>
            <p>
              I am Korean American. I was born in 1997 in Seattle and have lived
              here the majority of my life.
            </p>
            <p>
              I have been on the computer since I can remember. Luckly my
              parents have always allowed me to be on the computer. From there I
              was able to get into the physcial aspect of computers, such as
              building. From working on computers and always being on them I
              slowly began to be interested on the non physical aspect of
              computers. Slowly I got to know more and more and got interested
              in web development from being on it so much and fiddling around in
              the chrome inspector before knowing about anything. Which brings
              me to now.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
