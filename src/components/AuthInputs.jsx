import { useState } from "react";
import styled from "styled-components";
import Button1 from "./Button1";
import CustomInput from "./Input";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;



let Button2 = styled.button`
  color: #f0b322;
  border: none;

  .text-button:hover {
    color: #f0920e;
  }
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <CustomInput
          label="EMAIL"
          type="email"
          $invalid={emailNotValid}
          // style={{
          //     backgroundColor: emailNotValid ? 'red' : 'white'
          // }}
          onChange={(event) =>
            handleInputChange("email", event.target.value)
          }
        />
        <CustomInput
          label="PASSWORD"
          type="password"
          $invalid={passwordNotValid}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </ControlContainer>
      <div className="actions">
        <Button2 type="button">
          Create a new account
        </Button2>
        <Button1 onClick={handleLogin}>
          Sign In
        </Button1>
      </div>
    </div>
  );
}

