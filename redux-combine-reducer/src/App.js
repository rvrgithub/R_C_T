// import logo from './logo.svg';
import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Feeds } from "./Pages/Feeds";
import { Login } from "./Pages/Login";
import { Navbar } from "./Components/Navbar";
import { RequireAuth } from "./hoc/RequireAuth";
import { Post } from "./Pages/Post";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/feeds"
          element={
            <RequireAuth>
              <Feeds />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/post"
          element={
            <RequireAuth>
              <Post />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
