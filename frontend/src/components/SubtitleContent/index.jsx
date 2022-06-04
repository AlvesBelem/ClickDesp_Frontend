import React from "react";
import { Container, Span } from "./styles";

const SubtitleContent = (props) => {
  return (
    <Container>
      <Span>{props.title}</Span>
    </Container>
  );
};

export default SubtitleContent;
