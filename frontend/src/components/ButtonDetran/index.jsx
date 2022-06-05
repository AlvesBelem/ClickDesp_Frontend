import React from "react";
import { Container, Button } from "./styles";

export function ButtonDetran() {
  return (
    <Container>
      <Button>
        <a
          href="https://www.detran.pa.gov.br/index_.php#"
          target="_blank"
          rel="noreferrer"
        >
          Ir para o Detran-PA
        </a>
      </Button>
    </Container>
  );
}
