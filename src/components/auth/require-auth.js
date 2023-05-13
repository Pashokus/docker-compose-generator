import { useSelector } from 'react-redux';

const Authentication = (props) => {
    const navigate = useNavigate();
    const authenticated = useSelector((state) => state.auth.authenticated);

    useEffect(() => {
        if (!authenticated) {
            navigate('/');
        }
    }, [authenticated]) 

    return props.children;
}


export default Authentication;
