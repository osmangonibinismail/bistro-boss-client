
import { useQuery } from "@tanstack/react-query";
import UseAxiousSecure from "./UseAxiousSecure"
import useAuth from "./useAuth";


const UseCart = () => {
    // tan stack query
    const axiosSecure = UseAxiousSecure();
    const {user} = useAuth();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        }
    })
    return [cart, refetch]
};

export default UseCart
