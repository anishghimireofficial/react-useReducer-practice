import React, { useReducer } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  age: ""
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "FIRSTNAME":
      return { ...state, firstName: action.payload };
    case "LASTNAME":
      return { ...state, lastName: action.payload };
    case "AGE":
      return { ...state, age: action.payload };
    default:
      return state;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: e.target.name.toUpperCase(),
      payload: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state); // Just for demonstration, you can replace it with your logic
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        name="firstName"
        placeholder="First Name"
        value={state.firstName}
        onChange={handleChange}
      />
      <input
        name="lastName"
        placeholder="Last Name"
        value={state.lastName}
        onChange={handleChange}
      />
      <input
        name="age"
        placeholder="Age"
        value={state.age}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
