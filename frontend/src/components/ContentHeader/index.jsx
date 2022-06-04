import React from "react";
import { Container, TitleContainer, Controllers } from "./styles";
import SelectInput from "../../components/SelectInput";

const ContentHeader = (props) => {
  const values = [
    { id: 1, value: "1", label: "1" },

  ];
  const labels = [
    { id: 1, label: "1" },

  ];

  return (
    <Container>
      <TitleContainer>
        <h1>{props.title}</h1>
      </TitleContainer>
      <Controllers>
        {
          (values,
          labels.map((value, label) => (
            <SelectInput value={value} Label={label} />
          )))
        }
      </Controllers>
    </Container>
  );
};

export default ContentHeader;
