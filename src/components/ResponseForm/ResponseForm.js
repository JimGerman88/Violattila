import React from "react";
import { Container, Ratio } from "react-bootstrap";

const ResponseForm = () => {
  return (
    <section id="response-form">
      <Container>
        <h1 className="text-center">Válasz</h1>
        <Ratio aspectRatio={1 / 2}>
          <iframe
            title="Respond form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdgW4Lc4xINBKj_y51r7g-uVjAVuqeSgT5VxinjScS0Q64Wuw/viewform?embedded=true"
            height="500px"
            width="500px"
          >
            Betöltés…
          </iframe>
        </Ratio>
      </Container>
    </section>
  );
};

export default ResponseForm;
