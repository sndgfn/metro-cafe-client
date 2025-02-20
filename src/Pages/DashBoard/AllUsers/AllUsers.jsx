import { useQuery } from "@tanstack/react-query";


const AllUsers = () => {
// const axiosSecure=useAxios
// useAxiosSecure file banaite hobe age amamr

    const {data:users=[]}=useQuery({
    queryKey:['users'],
    queryFn:async()=>{
        // const res=await
    }
 })


    return (
        <div>
            
        </div>
    );
};

export default AllUsers;