import React from "react";
import { Container } from "./styles";
import SubtitleContent from "../../components/SubtitleContent/";
import { ButtonDetran } from "../../components/ButtonDetran";
import ContentHeader from "../../components/ContentHeader";

const Home = () => {
  return (
    <>
      <Container>
        <ContentHeader title="Home" />
        <SubtitleContent title="Serviços Detran" />
        <ButtonDetran />
      </Container>
    </>
  );
};

export default Home;
