import React from "react";
import "../styles.css";
import Form from "./Form";
import Profiles from "./Profile";

const App = () => {
  return (
    <div className="App">
      <h1>Soccer Player Profile</h1>
      <Form />
      <Profiles />
    </div>
  );
};

export default App;
