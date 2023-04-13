import SignInForm from '../../components/signin/SignInForm';
import auth from '../../services/auth.token';
import { userContext } from '../../context/UserProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {
    const navigate = useNavigate();
    const { userToken, setUserFromLoginToken } = useContext(userContext);

    const handleLoginForm = async(credentials) => {
        if (await auth.login(credentials)){
            setUserFromLoginToken();
            navigate('/');
        } else {
            console.log("connexion échouée")
        }
    }

    return (
        <div className='container w-full min-w-[300px] p-3'>
            <SignInForm submit={handleLoginForm} />
        </div>
    )
}