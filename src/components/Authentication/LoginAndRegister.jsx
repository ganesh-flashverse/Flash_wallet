// StudentLoginComponent.js
import React, { useState } from 'react';

const LoginAndRegister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Logic for student login
    };

    const handleRegister = () => {
        // Logic for student registration
    };

    const handlePasswordRecovery = () => {
        // Logic for password recovery
    };

    return (
        <div className="student-login">
            <h2>Student Login</h2>
            <form onSubmit={handleLogin}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Login</button>
            </form>
            <button onClick={handleRegister}>Register</button>
            <button onClick={handlePasswordRecovery}>Forgot Password?</button>
        </div>
    );
};

export default LoginAndRegister;