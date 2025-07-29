import React from "react";

export default function Skills(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      <ul>
        {props.skills.map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>
    </section>
  );
}