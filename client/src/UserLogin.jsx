import React, { useState } from 'react';

const UserLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Basic validation (you can add more complex validation)
        if (!username || !password) {
            setError('Please fill in all fields.');
            return;
        }

        // Here you can handle the login logic (e.g., API call)
        console.log('Logging in:', { username, password });

        // Reset form after submission
        setUsername('');
        setPassword('');
        setError('');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl mb-4">User Login</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 rounded"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default UserLogin;
