import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 class="mainHeading">Welcome to NC NEWS</h1>
      <div className="home_Container">
        <h3 className="home_Text">The only source of true information left!</h3>
      </div>
      <nav className="navBar">
        <span className="navItem">
          <Link to="/">Home</Link>
        </span>
        <span className="navItem">
          <Link to="/articles">Articles</Link>
        </span>
        <span className="navItem">
          <Link to="/topics">Topics</Link>
        </span>
        <span className="navItem">
          <Link to="/users">Users</Link>
        </span>
      </nav>
    </header>
  );
};

export default Header;
