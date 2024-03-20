import React from "react";

const Main = (props) => {
  let condition = props.name;
  function firstName(e) {
    let newName;
    e ? (newName = e) : (newName = props.name);
    return newName;
  }


  // let number = [1, 2, 3, 4, 5];
  // let [a, b, ...rest] = number;
  // console.log(rest);

  return (
    <div className="App-main text-align-left">
      {/* {condition && <h1>Brian VanPortfleet</h1>}
      {condition ? <h1>Name: {firstName("Kaden")}</h1> : <h1>Unkown Person</h1>} */}
      <h2 style={{ marginBottom: "-2px" }}>Web Developer</h2>
      <h1 className="">Brian VanPortfleet</h1>
      <section className="card">
        {/* <h1>About {condition ? firstName("Me") : props.name}</h1> */}
        <p>
          Certified full-stack developer with a specialization in React and Vue
          with over two decades of expertise in website management, IIS server
          administration, and Corporate domain name acquisitions, management,
          and domain transitions. Proficient in SEO, secure certificate
          handling, and ADA compliance, with a strong capability in
          transitioning old web applications to more modern Node.js
          frameworks/libraries like Angular, React, NextJS and Vue. Also an
          expert in HTML, CSS, SQL, and various design tools such as Photoshop,
          Illustrator, and InDesign. Possessing a strong marketing and
          advertising background, aiming for a senior role to leverage my
          extensive experience in driving efficient web system management,
          complemented by compelling visual design and robust database
          solutions.
        </p>
      </section>
      <section className="">
        <h2 className="mt-5">Download my resume</h2>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm5.845 17.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V12a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
              clipRule="evenodd"
            />
            <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
          </svg>
          <a href="../BrianVanportfleet.pdf" target="_blank">
            Brian VanPortfleet
          </a>
        </div>
      </section>
    </div>
  );
};

export default Main;
