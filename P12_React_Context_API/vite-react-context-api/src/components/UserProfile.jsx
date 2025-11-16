import { useContext } from 'react';
import UserContext from '../contexts/userContext';

const UserProfile = () => {
    const { user } = useContext(UserContext);
    if (!user) {
        return <h2>Please Login to Continue!</h2>
    }
    return (
        <>
            <h2>User Details</h2>
            <h4>Welcome {user?.fullname} to the Portal! You are now logged-in! </h4>
        </>
    );
};

export default UserProfile;
