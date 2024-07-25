import React, { useState } from 'react';
import './Login.css';
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function handleSubmit(event) {

        event.preventDefault();
        // Add login logic here
        console.log(`Username: ${username}, Password: ${password}`);
    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                <div className="user">
                    <label>Username:</label>
                    <input type="text" placeholder="UserName" value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className="pass">
                    <label>Password:</label>
                    <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>

        </>
    )
}
