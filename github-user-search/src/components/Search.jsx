import React, { useState } from "react";
import { fetchUserData } from '../services/githubService';
import useUserStore from "../store/store";


function Search() {
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { users, addUser } = useUserStore();

    loading
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        try {
            const data = await fetchUserData(username);
            addUser(data);
            setUsername("");
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div
                style={
                    {
                        padding: "3em",
                        border: "1px solid gray",
                        borderRadius: "10px"
                    }
                }
            >
                <form onSubmit={handleSubmit} action=""
                    style={
                        {
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                        }
                    }>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={
                            {
                                padding: "12px",
                                width: "30em"
                            }
                        } type="text"
                        placeholder="Enter GitHub Username" />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="display-info">
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: "red" }}>Looks like we cant find the user</p>}
                {
                    users.map((user) => (
                        <div className="card" key={user.id}>
                            <img src={user.avatar_url} alt={user.avatar_url} />
                            <h4>{user.name || user.login}</h4>
                            <a href={user.html_url} target="_blank">GitHub Link</a>
                        </div>
                    ))
                }

            </div>
        </>
    )

}

export default Search;