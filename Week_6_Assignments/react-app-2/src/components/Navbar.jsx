function Navbar()
{
    return(
    <div className="flex justify-between px-10 py-5 bg-gray-500 align-middle">
        <h1 className="text-2xl">LOGO</h1>
        <ul className="flex gap-9 mx-3 my-3">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Register</a>
            </li>
            <li>
                <a href="#">Login</a>
            </li>
        </ul>
    </div>
    )
}

export default Navbar;

