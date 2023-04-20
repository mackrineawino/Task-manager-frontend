import React, {useState} from 'react'
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm'
import styled from "styled-components";

interface Props {
 onLogin: React.Dispatch<React.SetStateAction<null>>
}
const LandingPage: React.FC<Props> = ({onLogin}) => {

  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="login-form">
    <Wrapper>
      <Logo>Go-Productive</Logo>
      <h2 className="tagline">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni optio cupiditate blanditiis necessitatibus harum odio vitae itaque repellendu
      </h2>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <Divider />
          <p className="accountquestion">Don't have an account?</p> &nbsp;
          <button onClick={() => setShowLogin(false)}>Sign Up</button>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <Divider />
          <p className="accountquestion">Already have an account?</p> &nbsp;
          <button onClick={() => setShowLogin(true)}>Log In</button>
        </>
      )}
    </Wrapper>
  </div>
);

}

export default LandingPage

const Logo = styled.h1`
  font-family: "Cookie", cursive;
  color: white;
  text-shadow: 1px 1px 10px #03045E;
  font-size: 100px;
  margin: 8px 0 16px;
  text-align: center;
`;
const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;
const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;
