function NavBar(){
    return(
        <div className="bg-olive-500 shadow-2xl rounded-b-2xl  p-5">
            <h1 className="text-white ">LOGO</h1>
            <div className="flex flex-row-reverse flex-3 gap-15">
                <h2 className="text-white">Home</h2>
                <h2 className="text-white">Sign Up</h2>
                <h2 className="text-white">Login</h2>
            </div>
        </div>
    )
}
export default NavBar;