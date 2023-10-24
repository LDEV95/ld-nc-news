import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ArticlesList from "./components/articlesList";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/articles" element={<ArticlesList />} />
      </Routes>
    </div>
  );
}

export default App;
