import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/">My Online Notepad</Link>
      </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Add Notes</Link>
      </div>
    </nav>
  );
};

export default Navbar;
