import React, { useState } from "react";
import { fetchUserData, advancedUserSearch } from '../services/githubService';
import useUserStore from "../store/store";


function Search() {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { users, addUser } = useUserStore();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Are search criteria provided
        if (!username.trim() && !location.trim() && !minRepos.trim()) {
            setError("Provide at least one search criteria");
            return;
        }

        setLoading(true);
        setError(false);

        try {

            const hasAdvancedFilters = location.trim() || minRepos.trim();

            if (!hasAdvancedFilters && username.trim()) {

                const data = await fetchUserData(username);
                addUser(data);

            } else {

                const searchParams = {};

                if (username.trim()) searchParams.username = username.trim();
                if (location.trim()) searchParams.location = location.trim();
                if (minRepos.trim()) searchParams.minRepos = parseInt(minRepos);

                const data = await advancedUserSearch(searchParams);

                if (data.length === 0) {
                    setError("Looks like we cant find the user");
                    return;
                }

                data.forEach(user => addUser(user));
            }

            setUsername("");
            setLocation("");
            setMinRepos("");

        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="max-w-md mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 backdrop-blur-sm">
                    {/* Form Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                            GitHub User Search
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Username Input */}
                        <div className="relative group">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="text"
                                    placeholder="Enter Username"
                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 text-gray-800 placeholder-gray-400 shadow-sm hover:shadow-md"
                                />
                            </div>
                        </div>

                        {/* Location Input */}
                        <div className="relative group">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <input
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    type="text"
                                    placeholder="Enter Location (Optional)"
                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 text-gray-800 placeholder-gray-400 shadow-sm hover:shadow-md"
                                />
                            </div>
                        </div>

                        {/* Min Repos Input */}
                        <div className="relative group">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">

                                </div>
                                <input
                                    value={minRepos}
                                    onChange={(e) => setMinRepos(e.target.value)}
                                    type="number"
                                    placeholder="Minimum Repos (Optional)"
                                    min="0"
                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 text-gray-800 placeholder-gray-400 shadow-sm hover:shadow-md"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl disabled:shadow-md transform hover:scale-[1.02] disabled:scale-100 transition-all duration-200 flex items-center justify-center space-x-2"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Searching...</span>
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <span>Search Users</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
            <div className="space-y-6">
                {loading && (
                    <div className="flex items-center justify-center py-8">
                        <p className="text-lg text-gray-600">Loading...</p>
                    </div>
                )}

                {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-700 font-medium">Looks like we can't find the user</p>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {users.map((user) => (
                        <div
                            key={`user-${user.id}`}
                            className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Avatar - centered and larger */}
                            <div className="flex justify-center mb-4">
                                <img
                                    className="w-20 h-20 rounded-full border-4 border-gray-100 shadow-md object-cover"
                                    src={user.avatar_url}
                                    alt={user.login}
                                />
                            </div>

                            {/* User Info - centered */}
                            <div className="text-center space-y-2">
                                <h4 className="text-xl font-semibold text-gray-800">
                                    {user.name || user.login}
                                </h4>

                                {user.name && (
                                    <p className="text-gray-500 text-sm">@{user.login}</p>
                                )}

                                {user.location && (
                                    <div className="flex items-center justify-center text-gray-600">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-sm">{user.location}</p>
                                    </div>
                                )}

                                {user.public_repos !== undefined && (
                                    <div className="flex items-center justify-center text-gray-600">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-sm">{user.public_repos} repositories</p>
                                    </div>
                                )}
                            </div>

                            {/* Profile Link - styled button */}
                            <div className="mt-6 flex justify-center">
                                <a
                                    href={user.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                    </svg>
                                    View Profile
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default Search;