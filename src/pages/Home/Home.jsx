'use client';
import { useState, useEffect, useRef } from "react";

const Home = () => {
  const [username, setUserName] = useState("");  // Track username input
  const [userData, setUserData] = useState(null);  // Store user profile data
  const [loading, setLoading] = useState(false);  // Loading state
  const [error, setError] = useState(null);  // Error state
  const inputRef = useRef(null);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    if (!username) return; // If no username, do nothing

    setLoading(true); // Set loading to true
    setError(null); // Reset any previous errors

    try {
      // Fetch user data from GitHub API
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error('User not found');
      }

      const data = await response.json();
      setUserData(data); // Set the fetched data to state
    } catch (err) {
      setError(err.message); // Set error message if API call fails
    } finally {
      setLoading(false); // Set loading to false after request
    }
  };

  // Handle username input change
  const handleUser = (e) => {
    setUserName(e.target.value);  // Update the username state
  };

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gradient-to-br from-purple-100 via-gray-200 to-gray-300">
      {/* Main Content */}
      <main className="flex flex-col justify-center items-center flex-grow px-8 sm:px-4 py-16">

        {/* Search Form */}
        <form
          className="flex flex-col sm:flex-row justify-center items-center w-full sm:w-2/3 lg:w-1/3 h-1/3 space-y-6 sm:space-y-0"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center bg-white rounded-full shadow-lg p-3 w-full sm:w-3/4">
            {/* GitHub Logo inside search bar */}
            <div className="px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.172c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.588 8.199-6.084 8.199-11.385 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>

            {/* Search Input GitHub username */}
            <input
              type="text"
              placeholder="Enter GitHub username"
              className="w-full px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-full"
              value={username}
              onChange={handleUser}
              ref={inputRef}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-purple-500 text-white p-3 rounded-full hover:bg-purple-600 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 flex items-center justify-center ml-4"
              disabled={loading} // Disable button when loading
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </form>

        {/* Display user data */}
        {loading && <p className="mt-4 text-gray-600">Loading...</p>}

        {error && <p className="mt-4 text-red-600">{error}</p>}

        {userData && (
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-semibold">User Profile</h2>
            <img
              src={userData.avatar_url}
              alt="User Avatar"
              className="w-24 h-24 rounded-full mx-auto mt-4"
            />
            <p className="mt-2 text-lg font-bold">{userData.name}</p>
            <p className="text-sm text-gray-500">{userData.login}</p>
            <p className="mt-2 text-gray-700">{userData.bio}</p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-purple-600 hover:underline"
            >
              Visit Profile
            </a>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;