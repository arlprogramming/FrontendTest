import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function Crud() {
  return (
    <div>
      <UserList />
    </div>
  );
}

export default Crud;
