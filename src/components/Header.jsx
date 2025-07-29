import React from "react";

export default function Header(props) {
  return (
    <header style={{ padding: "2rem", backgroundColor: "#282c34", color: "white" }}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </header>
  );
}