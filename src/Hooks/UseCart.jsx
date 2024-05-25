
import { useQuery } from "@tanstack/react-query";
import UseAxiousSecure from "./UseAxiousSecure"
import UseAuth from "./UseAuth";


const UseCart = () => {
    // tan stack query
    const axiosSecure = UseAxiousSecure();
    const {user} = UseAuth();
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
