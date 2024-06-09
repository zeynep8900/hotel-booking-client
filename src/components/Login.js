import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const login = async () => {
        const response = await axios.post('/api/admin/login', credentials);
        localStorage.setItem('token', response.data.token);
    };

    return (
        <div>
            <input type="text" placeholder="Username" onChange={e => setCredentials({ ...credentials, username: e.target.value })} />
            <input type="password" placeholder="Password" onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
            <button onClick={login}>Login</button>
        </div>
    );
};

export default Login;
