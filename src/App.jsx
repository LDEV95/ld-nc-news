import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ArticlesList from "./components/articlesList";
import SingleArticle from "./components/SingleArticle";
import Comment from "./components/Comments";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/articles/:article_id/comments" element={<Comment />} />
      </Routes>
    </div>
  );
}

export default App;
