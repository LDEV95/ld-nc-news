// go back to this one
import { Link } from "react-router-dom";
import UserSelection from "./UserSelection";
import { useState } from "react";
import TopicsPages from "./TopicsALL";
import TopicsByArticle from "./TopicsByArticle";

const Header = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");

  return (
    <header>
      <h1 className="mainHeading">Welcome to NC NEWS!</h1>
      <div className="home_Container">
        <h3 className="home_Text">The only source of true information left.</h3>
      </div>
      <nav className="navBar">
        <span className="navItem">
          <Link to="/">Home</Link>
        </span>
        <span className="navItem">
          <Link to="/articles">Articles</Link>
        </span>
        <span className="navItem">
          <TopicsPages onSelectTopic={setSelectedTopic} />
          <TopicsByArticle selectedTopic={selectedTopic} />
        </span>

        <span className="navItem">
          <UserSelection onSelectUser={setSelectedUser} />
        </span>
      </nav>
    </header>
  );
};

export default Header;
