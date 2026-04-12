function User(props)
{
    //state
    const {user}=props;
    return(
        <div className="text-center p-5 shadow-2xl rounded-2xl shadow-gray-400">
            <h1>User {user.index}:</h1>
            <h2 className="text-3xl text-red-400"> Name: {user.name}</h2>
            <h2 className="font-bold mt-5">Email: {user.email}</h2>
            <img src={user.image} alt="" className="block mx-auto rounded-3xl mt-5"/>
        </div>
    )
}

export default User;
