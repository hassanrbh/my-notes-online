import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Page Not Found</h2>
      <p>That page cannot be found</p>
      <Link to="/"></Link>
    </div>
  );
};

export default NotFound;
