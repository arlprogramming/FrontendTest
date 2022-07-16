import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuBar from "./components/menubar/nav/MenuBar";
import Home from "./components/menubar/home/Home";
import Filter from "./components/filter/Filter";
import AddUser from "./components/crud/frontend/components/AddUser";
import EditUser from "./components/crud/frontend/components/EditUser";
import UserList from "./components/crud/frontend/components/UserList";

function App() {
  return (
    <Router>
      <div className="App">
        <MenuBar />
        <div className="Header">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/" element={<UserList />} />
            <Route path="add" element={<AddUser />} />
            <Route path="edit/:id" element={<EditUser />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
