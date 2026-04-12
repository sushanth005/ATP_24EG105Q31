import { useEffect } from "react";
import { useState } from "react";

function APIDemo(){
    let [count,setCount]=useState(100);
    const changeCount=()=>{
        setCount(count+1);
    };

    let [users,setUsers]=useState([]);
    let [loading,setLoading]=useState(false);
    let [error,setError]=useState(null);

    useEffect(()=>{
        console.log("Use Effect Executed");
        async function getData(){

                //set loading to true
                setLoading(true);
            try{
            let res=await fetch("https://jsonplaceholder.typicode.com/posts");
            let usersList=await res.json();
            setUsers(usersList);
            }catch(err){
                console.log("Error is: ",err);
                //update error state
                setError(err);
            }finally{
                //update loading to false
                setLoading(false);
            }
            }

            //call
            getData();
        },[]);

    console.log("API Demo Rendered");
    //Making API Req need to be in waiiting until initial rendering of React Application
    //Initial Render -> Display -> API Call ->Re-Rendering ->Display
    //deal with loading state
    if(loading===true){
        return <p className="text-center text-5xl">Loading....</p>
    }
    if(error!=null)
    {
        return <p className="text-center text-red-500 text-5xl">Reason:{error.message}</p>
    }

    return(
        <div className="text-center m-10">
            <p className="bg-red-700 p-5">Count:{count}</p>
            <button className="bg-blue-400 p-5" onClick={changeCount}>Change Count</button>
            <br></br>
            <br></br>

            <h1 className="text-8xl text-blue-400">List of Users</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                users.map((userObj)=>(
                    <div key={userObj.id} className="border-2 border-black rounded-2xl shadow-2xl p-5 m-5">
                        <p className="text-1xl">Title:{userObj.title}</p>
                        <p className="text-1xl">Body:{userObj.body}</p>
                    </div>
                ))
                }
            </div>

        </div>
    )
}

export default APIDemo;