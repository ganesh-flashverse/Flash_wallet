import React, { useState } from 'react';
import './AdminLogin.css';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [resetEmail, setResetEmail] = useState('');
    const [showReset, setShowReset] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Add authentication logic here
        console.log('Login attempted with:', credentials);
    };

    const handlePasswordReset = (e) => {
        e.preventDefault();
        // Add password reset logic here
        console.log('Password reset requested for:', resetEmail);
    };

    return (
        <div className="admin-login-container">
            {!showReset ? (
                <div className="login-form">
                    <h2>Admin Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                value={credentials.username}
                                onChange={(e) => setCredentials({
                                    ...credentials,
                                    username: e.target.value
                                })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                value={credentials.password}
                                onChange={(e) => setCredentials({
                                    ...credentials,
                                    password: e.target.value
                                })}
                                required
                            />
                        </div>
                        <button type="submit" className="login-button">Login</button>
                        <button 
                            type="button" 
                            className="forgot-password"
                            onClick={() => setShowReset(true)}
                        >
                            Forgot Password?
                        </button>
                    </form>
                </div>
            ) : (
                <div className="reset-form">
                    <h2>Reset Password</h2>
                    <form onSubmit={handlePasswordReset}>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                value={resetEmail}
                                onChange={(e) => setResetEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="reset-button">Send Reset Link</button>
                        <button 
                            type="button" 
                            className="back-to-login"
                            onClick={() => setShowReset(false)}
                        >
                            Back to Login
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AdminLogin;