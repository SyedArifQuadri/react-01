import React from "react";

export default function About(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      <p>
        {props.content}
      </p>
    </section>
  );
}