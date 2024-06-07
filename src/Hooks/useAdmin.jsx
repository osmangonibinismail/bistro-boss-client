import { useQuery } from "@tanstack/react-query";
import UseAxiousSecure from "./UseAxiousSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
    const { user, loading } = useAuth();
    const axiosSecure = UseAxiousSecure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking admin', user)
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            // console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}

export default useAdmin
