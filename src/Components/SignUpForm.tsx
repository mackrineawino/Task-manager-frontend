import React, { useState } from 'react';

import "./LoginForm/loginform.css"

interface Props{
    onLogin: React.Dispatch<React.SetStateAction<null>>;
}

const SignUpForm: React.FC<Props> = ({onLogin}) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    //const newUser = {name, email, password};

    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        console.log("forbidden")
      }
    });
  }
    
  
  //   fetch("http://localhost:3000/signup", {
  //     method: 'POST',
  //     headers: { "content-type":"application/json" },
  //     body: JSON.stringify(newUser)
  //   }).then(() => console.log(newUser));
  
  //  }

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name</label>
        <br />
        <input type="text" id="name" value ={name} onChange={(event) => setName(event.target.value)} />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <br />
        <br />
        <button className='signup-button' type="submit">Signup</button>
      </form>

    </div>
  )
}

export default SignUpForm