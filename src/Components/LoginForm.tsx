import React, { useState } from 'react';
import styled from "styled-components";

// import button from '../Styling/Button';

interface Props {
    onLogin: React.Dispatch<React.SetStateAction<null>>;
}

const LoginForm: React.FC<Props> = ({ onLogin }) => {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errors, setErrors] = useState<Error[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <form>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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