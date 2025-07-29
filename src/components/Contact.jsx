import React from "react";

export default function Contact(props) {
  const { email, phone ,title} = props;

  return (
    <section>
      <h2>{title}</h2>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>
        Phone: <a href={`tel:${phone}`}>{phone}</a>
      </p>
    </section>
  );
}