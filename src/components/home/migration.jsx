import Nav from "react-bootstrap/Nav";

export const Jumbotron = (props) => {
  const bgStyle = props.style ?? { backgroundColor: "#e9ecef" };
  const containerPadding = props.compact ? "3rem 6rem" : "8rem 6rem";
  return (
    <div id={props.id} className={`py-3 ${props.className}`} style={bgStyle}>
      <div className="container-fluid" style={{ padding: containerPadding }}>
        {props.children}
      </div>
    </div>
  );
}

export const NavLink = (props) => {
  return (
    <Nav.Link
      href={props.href}
      target={props.target}
      rel={props.rel}
    >
      <span className={`nav-item lead ${props.className}`}>
        {props.children}
      </span>
    </Nav.Link>
  );
}
