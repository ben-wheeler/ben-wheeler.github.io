import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1000% 1000%",
        }}
        className="title bg-transparent bgstyle text-light d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <Container className="text-center">

          <div className="p-5">
          <h1 ref={ref} className="display-2">
            {title}
          </h1>
          <div className="lead mb-3">
            {message}
          </div>
            {icons.map((icon, index) => {
              const isBrand =
                icon.image.includes("fa-github") ||
                icon.image.includes("fa-linkedin") ||
                icon.image.includes("fa-discord") ||
                icon.image.includes("fa-app-store");

              const iconClass = `${isBrand ? "fab" : "fas"} ${icon.image} fa-3x socialicons`;

              return (
                <a
                  key={`social-icon-${index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.url}
                  aria-label={`My ${icon.image.split("-")[1]}`}
                >
                  <i className={iconClass} />
                </a>
              );
            })}
          </div>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
