import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ArticlesList from "./components/articlesList";
import SingleArticle from "./components/SingleArticle";
import Comment from "./components/Comments";
import { UserContext } from "./Contexts/UserContext";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "jessjelly",
    name: "Jess Jelly",
    avatar_url:
      "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg",
  });

  const [selectedUser, setSelectedUser] = useState("");

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/articles/:article_id/comments" element={<Comment />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
