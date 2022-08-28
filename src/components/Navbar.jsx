import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>
                My Online Notepad
            </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Add Notes</Link>
            </div>
        </nav>
    );
}

export default Navbar;