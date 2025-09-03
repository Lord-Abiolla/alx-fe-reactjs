import { useContext } from 'react';
import UserContext from '../UserContext';
import UserInfo from './UserInfo';

function UserProfile() {
    const userData = useContext(UserContext);

    return (
        <div>
            <h2>{userData.name}'s Profile</h2>
            <UserInfo />
        </div>
    );
}

export default UserProfile;