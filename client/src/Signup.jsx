import React from 'react';

const Signup = () => {
    return (
        <div
            style={{ animation: 'slideInFromLeft 1s ease-out' }}
            className="max-w-md w-full bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8"
        >
            <h2
                style={{ animation: 'appear 2s ease-out' }}
                className="text-center text-4xl font-extrabold text-white"
            >
                Get Started
            </h2>
            <p style={{ animation: 'appear 3s ease-out' }} className="text-center text-gray-200">
                With EventConnect
            </p>
            <form method="POST" action="#" className="space-y-6">
                <div className="relative">
                    <input
                        placeholder="john@example.com"
                        className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                        required
                        id="email"
                        name="email"
                        type="email"
                    />
                    <label
                        className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                        htmlFor="email"
                    >
                        Email address
                    </label>
                </div>
                <div className="relative">
                    <input
                        placeholder="john@example.com"
                        className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                        required
                        id="email"
                        name="email"
                        type="email"
                    />
                    <label
                        className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                        htmlFor="email"
                    >
                        Full Name
                    </label>
                </div>
                <div className="relative">
                    <input
                        placeholder="Password"
                        className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                        required
                        id="password"
                        name="password"
                        type="password"
                    />
                    <label
                        className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                        htmlFor="password"
                    >
                       Create Password
                    </label>
                </div>
                <div className="relative">
                    <input
                        placeholder="Password"
                        className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                        required
                        id="password"
                        name="password"
                        type="password"
                    />
                    <label
                        className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                        htmlFor="password"
                    >
                       Re-enter Password
                    </label>
                </div>
                <div className="flex items-center justify-between">
                    <label className="flex items-center text-sm text-gray-200">
                    </label>

                </div>
                <button
                    className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
                    type="submit"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;
