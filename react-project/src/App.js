// App.js
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Home from "./Home";
import Registration from "./Registration";
import About from "./About";
import GameComponents from "./Game";
import { Routes, Route } from "react-router-dom";
import Content from "./Content";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* "/" renders your blog content */}
        <Route path="/" element={<Content />} />
        <Route path="/matches" element={<Content />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/goToGame" element={<GameComponents />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
