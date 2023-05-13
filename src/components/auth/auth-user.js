import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AuthenticatedUser = (props) => {
    const navigate = useNavigate();
    const authenticated = useSelector(state => state.auth.authenticated);

    useEffect(() => {
        if (authenticated) {
            navigate('/');
        }
    }, [authenticated]) 

    return props.children;
}

export default AuthenticatedUser;
