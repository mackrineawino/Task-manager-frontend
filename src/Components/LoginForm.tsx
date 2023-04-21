import React, { useState } from 'react';
import styled from "styled-components";

// import button from '../Styling/Button';

interface Props {
    onLogin: React.Dispatch<React.SetStateAction<null>>;
}

const LoginForm: React.FC<Props> = ({ onLogin }) => {

    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    //const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsLoading(true);
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, password }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                console.log(Error)
                //r.json().then((err) => setErrors(err.errors));
            }
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <form>
                <label htmlFor="username">Name</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </form>
            <form>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </form>
            <button color="primary" type="submit">
                {isLoading ? "Loading..." : "Login"}
            </button>
            {/* <form>
                {errors.map((err) => (
                    <error key={err}>{err}</error>
                ))}
            </form> */}
        </form>
    );
}
export default LoginForm