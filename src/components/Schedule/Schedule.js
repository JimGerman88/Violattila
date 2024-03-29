import React from "react";
import { Container } from "react-bootstrap";

const Schedule = () => {
  return (
    <section id="schedule">
      <Container>
        <h1 className="text-center">Menetrend</h1>
        <div className="timeline">
          <div className="timeline-row">
            <div className="timeline-time">
              15:30<small>Július 20</small>
            </div>
            <div className="timeline-content">
              <i className="icon-attachment"></i>
              <h4>Templomi szertartás</h4>
              <p>Hamarosan bővül...</p>
            </div>
          </div>
          <div className="timeline-row">
            <div className="timeline-time">
              18:00<small>Július 20</small>
            </div>
            <div className="timeline-content">
              <i className="icon-attachment"></i>
              <h4>Vendégvárás kezdete</h4>
              <p>Hamarosan bővül...</p>
            </div>
          </div>
          <div className="timeline-row">
            <div className="timeline-content">
              <i className="icon-attachment"></i>
              <h4>Hamarosan bővül...</h4>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Schedule;
