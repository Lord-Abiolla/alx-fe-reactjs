import Axios from "axios";
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;


export async function fetchUserData(username) {

    if (!username) throw new Error("Username is required");


    const response = await Axios.get(`https://api.github.com/users/${username}`, {
        headers: {
            Authorization: `token ${token}`
        },
    });
    return response.data;

};