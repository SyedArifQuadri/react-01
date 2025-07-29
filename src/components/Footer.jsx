import React from "react";

function Footer(props) {
  return (
    <footer style={{ padding: "2px", backgroundColor: "#f5f6f5", textAlign: "center" }}>
      <p>&copy; {new Date().getFullYear()} {props.content}</p>
    </footer>
  );
}

export default Footer;
