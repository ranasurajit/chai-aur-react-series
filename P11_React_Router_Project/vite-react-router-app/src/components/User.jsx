import { useParams } from 'react-router-dom';

const User = () => {
    const { userId } = useParams();
    return (
        <div className='bg-gray-600 text-white text-center text-2xl p-4'>User Details : {userId} </div>
    );
};

export default User;
