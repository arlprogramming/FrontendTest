import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuBar from "./components/menubar/nav/MenuBar";
import Home from "./components/menubar/home/Home";
import Filter from "./components/filter/Filter";
import AddUser from "./components/crud/frontend/components/AddUser";
import EditUser from "./components/crud/frontend/components/EditUser";
import UserList from "./components/crud/frontend/components/UserList";
import Login from "./components/login/Login";
import Registrasi from "./components/login/Registrasi";

function App() {
  return (
    <Router>
      <div className="App">
        <MenuBar />
        <div className="Header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/crud" element={<UserList />} />
            <Route path="add" element={<AddUser />} />
            <Route path="edit/:id" element={<EditUser />} />
            <Route path="login" element={<Login />} />
            <Route path="registrasi" element={<Registrasi />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
