import React from "react";

const WorkHistory = (props) => {
  return (
    <div>
      <h1>{props.pageTitle}</h1>
      <section className="mb-6">
        <p>
          <strong>Web Content Manager</strong>
          &nbsp;
          <em className="text-sm">
            (Farmers Insurance, Caledonia, MI — August 15, 2001 - September 28th,
            2023)
          </em>
        </p>
        <p>
          Acted as an experienced full-stack UI/UX designer, creating intuitive
          and compelling user interfaces, enhancing overall user experience with
          various NodeJS libraries and frameworks like React and Vue. Directed
          and updated website content, ensuring alignment with brand guidelines
          and maximizing SEO potential. Managed SQL and MySQL database
          integrations for dynamic content retrieval and user data storage.
          Collaborated with marketing and IT departments on domain name
          acquisitions, management, domain transitions, and the acquisition and
          installation of secure certificates. Specialized in transitioning web
          applications from .NET to Node.js, ReactJS and Vite/VueJS. Utilized
          Google Analytics to track website performance, and created funnel
          reports to understand user behaviors and conversion pathways. Ensured
          all web content and interfaces are ADA compliant, optimizing
          accessibility for all users. Engaged with the design team to optimize
          visual content, enhancing user engagement and conversions. Oversaw
          website and domain management, including database configurations.
        </p>
      </section>
      <section className="">
        <p>
          <strong>Graphic Designer Meijer Corporation</strong>&nbsp;
          <em className="text-sm">
            (Walker, MI — November 15, 1996 - August 14, 2001)
          </em>
        </p>
        <p>
          Crafted visual content for various marketing campaigns using
          Photoshop, Illustrator, InDesign, and PowerPoint. Assisted the web
          development team in integrating graphics into database-driven
          interfaces. Collaborated with marketing to ensure graphic designs
          aligned with promotional strategies. Worked under tight holiday
          deadlines, ensuring timely delivery and quality of marketing
          materials.
        </p>
      </section>
    </div>
  );
};

export default WorkHistory;
