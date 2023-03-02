import React from "react";
import Message from "./Message";
import "./App.css";

const App = () => {

  return (
    <div>
      <section className="App">
        <Message className="App" />
        <img
          src="https://sandstorm.de/_Resources/Persistent/3/2/8/5/3285416e8503b2c8354c321bcd690cf550b8b2d3/React-Logo.svg"
          className="App-logo"
          alt="react logo"
        />

        <img
          className="App-logo"
          src="https://www.ffwd.org/wp-content/uploads/Hello-World-logo.png"
          alt="Hello World Logo"
        />
        <h1>Hello World React App</h1>
        <h3>By Leila</h3>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNkMhkndnGruIMGqdFsSm_0r2ZqFA0_-g_g&usqp=CAU"
          alt="sun"
          className="sun-logo"
        />
        <h2>Do you like my simple Application?</h2>
      </section>
      <button className="App-btn" onClick={alertWhenClicked} >YES</button>
    </div>
  );
};
 function alertWhenClicked() {
    alert("Thank You! :)))");
  }

export default App;
