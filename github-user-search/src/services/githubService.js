import Axios from "axios";
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;


export async function fetchUserData(username) {

    if (!username) throw new Error("Username is required");

    const encodedUserName = encodeURIComponent(username);


    const response = await Axios.get(`https://api.github.com/users/${encodedUserName}`, {
        headers: {
            Authorization: `token ${token}`
        },
    });
    return response.data;

};

export async function advancedUserSearch({ username, location, minRepos }) {
    try {
        let query = "";

        if (username) query += `${username} in:login`;
        if (location) query += `location:${location}`;
        if (minRepos) query += `repos:>=${minRepos}`;

        const encodedQuery = encodeURIComponent(query);

        const response = await Axios.get(`https://api.github.com/search/users?q=${encodedQuery}`, {
            headers: {
                Authorization: `token ${token}`
            },
        });
        console.log(response.data.items);
        return response.data.items;

    } catch (error) {
        throw new Error(error);
    }
}