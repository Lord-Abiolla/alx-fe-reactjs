import React from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    }
    return (
        <div>
            <h1>Profile</h1>
            <nav>
                <Link to={"/details"}>Profile Details</Link>
                <Link to={"/settings"}>Profile Settings</Link>
                <button onClick={handleLogout}>Log Out</button>
            </nav>
            <Routes>
                <Route path="details" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
                <Route index element={<ProfileDetails />} />
            </Routes>
        </div>
    )
}

export default Profile;