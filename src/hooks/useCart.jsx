import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const useCart = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['enrolled', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://singerella-server-syeda-sunjida.vercel.app/enrolled?email=${user?.email}`)
            return res.json();
        },
    })

    return [cart, refetch]

}
export default useCart;