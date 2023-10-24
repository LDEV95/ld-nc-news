import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 class="mainHeading">Welcome to NC NEWS!</h1>
      <div className="home_Container">
        <h3 className="home_Text">
          The only true source of information left...
        </h3>
      </div>
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
