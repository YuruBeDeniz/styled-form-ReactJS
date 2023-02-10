import { useState } from "react";
import { GlobalStyle, StyledFormWrapper, StyledButton, StyledError, StyledFieldset, StyledForm, StyledInput, StyledTextArea } from "./App.styles"



function App() {
  const [state, setState] = useState({
    name: "",
    email: "",
    gender: "",
    message: "",
  });
  const [error, setError] = useState("");

  //we need two callback functions: 1.to submit 2.when the input changes

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitted!")
    console.log(state)

    for(let key in state) {
      if(state[key] === ""){
        setError(`You must provide the ${key}`);
        return; //if there is an error, we'll just return, as there wont be any reason to loop
      }
    }
    setError("");
    setState({});
  };

  const handleInput = e => {
    const inputName = e.target.name;
    const value = e.target.value;

    setState(prev => ({...prev, [inputName]: value}));
  };

  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit} >
          <h2>Contact Form</h2>
          <label htmlFor="name">Name</label>
          <StyledInput 
            type="text" 
            name="name" 
            value={state.name}
            onChange={handleInput} />

          <label htmlFor="email">Email</label>
          <StyledInput 
            type="email" 
            name="email"
            value={state.email}
            onChange={handleInput} />

          <StyledFieldset>
            <legend>Gender</legend>
            <label>
              <input 
                type="radio" 
                value="female" 
                name="gender"
                checked={state.gender === "female"}
                onChange={handleInput} />
              Female
            </label>
            <label>
              <input 
                type="radio" 
                value="male" 
                name="gender" 
                checked={state.gender === "male"}
                onChange={handleInput}
              />
              Male
            </label>
          </StyledFieldset>

          <label htmlFor="message">Message</label>
          <StyledTextArea 
            name="message" 
            value={state.message}
            onChange={handleInput}
          />

          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          

          <StyledButton type="submit">
            Send Message
          </StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
}

export default App;

//we use <label htmlFor=""/> htmlFor for label if we put it outside of input itself
//outside of the element. if you wrap it with label we dont need to use htmlFor
//because, then, it knows it belongs to the label. And we need to use name="" with
//with corresponding value

//we need to listen to the onChange event in input elements
