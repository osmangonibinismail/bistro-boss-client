import { FaGoogle } from "react-icons/fa"
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";




const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = UseAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }
    return (
        <div className="px-8">
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success font-bold gap-2 w-full">
                    <FaGoogle className=""></FaGoogle>
                    Google Login
                </button>
            </div>
            <div className="divider"></div>
        </div>
    )
}

export default SocialLogin
