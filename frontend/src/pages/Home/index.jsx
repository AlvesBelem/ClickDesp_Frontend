import React from "react";
import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SubtitleContent from "../../components/SubtitleContent/";

const Home = () => {
  return (
    <>
      <ContentHeader title="Home" />
      <Container>
        <SubtitleContent title="Serviços Detran" />
      </Container>
    </>
  );
};

export default Home;
