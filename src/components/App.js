import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={values.name}
            autoComplete="off"
          />
        </div>
        <div>
          <label>email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={values.email}
            autoComplete="off"
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={values.password}
            autoComplete="off"
          />
        </div>
        <div>
          <label>checkbox</label>
          <input type="checkbox" id="consent" />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default App;
