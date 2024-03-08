import React from 'react'

const Main = () => {
  let condition = true;
  function firstName(e) {
    let newName;
    e ? (newName = e) : (newName = "Brian");
    return newName;
  }

  return (
    <div className="App-main text-align-left">
      {condition && <h1>Brian VanPortfleet</h1>}
      {condition ? <h1>Name: {firstName("Kaden")}</h1> : <h1>Unkown Person</h1>}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Mauris a diam maecenas
      sed enim ut sem viverra aliquet. Ullamcorper dignissim cras tincidunt
      lobortis feugiat vivamus at augue. Luctus venenatis lectus magna fringilla
      urna porttitor rhoncus dolor. Amet venenatis urna cursus eget nunc
      scelerisque. Sed sed risus pretium quam vulputate dignissim suspendisse in
      est. Vivamus arcu felis bibendum ut tristique. Cum sociis natoque
      penatibus et magnis. Purus viverra accumsan in nisl nisi scelerisque eu.
      Pellentesque pulvinar pellentesque habitant morbi tristique senectus et
      netus. Ac tincidunt vitae semper quis lectus. Ut tellus elementum sagittis
      vitae et leo duis. Tempor nec feugiat nisl pretium fusce id velit ut.
      Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Risus
      viverra adipiscing at in tellus integer feugiat scelerisque. Eu
      scelerisque felis imperdiet proin fermentum leo. In nisl nisi scelerisque
      eu ultrices vitae. Egestas tellus rutrum tellus pellentesque eu tincidunt
      tortor aliquam nulla.
    </div>
  );
};

export default Main;
