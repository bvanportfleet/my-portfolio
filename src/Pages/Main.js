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
    </div>
  );
};

export default Main;
