import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 180px auto;
  grid-template-rows: 60px auto;
  grid-template-areas:
    "AS MH"
    "AS CT";
`;
