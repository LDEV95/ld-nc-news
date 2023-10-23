import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>NC NEWS</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            {" "}
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            {" "}
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
