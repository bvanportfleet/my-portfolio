// References.js
import React from "react";
import referencesData from "../references.json";

const References = (props) => {
  return (
    <div>
      <h1 className=" mb-4">{props.pageTitle}</h1>

      {referencesData.references.map((reference, index) => (
        <div key={index} className="card mb-8">
          <section className="font-bold text-sm mb-2">
            <h2>{reference.name}</h2>
            <p>{reference.title}</p>
            <p>
            {reference.phone} | {reference.email && <a href={`mailto:${reference.email}`}>{reference.email}</a>}
            </p>
            <a
              href={`https://www.${reference.linkedIn}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {reference.linkedIn}
            </a>
          </section>
          <p>{reference.text}</p>
          {index < referencesData.references.length - 1}
        </div>
      ))}
    </div>
  );
};

export default References;
