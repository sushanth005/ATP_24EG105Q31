function User(props){
    let { user } = props;
    return(
        <div className="shadow-2xl rounded-4xl border-0.5">
            <h1 className="flex justify-center">{user.name}</h1>
            <p className="flex justify-center">{user.email}</p>
            <p className="flex justify-center p-5"><img src={user.image} alt="image not available" /></p>
        </div>
    )
}
export default User;