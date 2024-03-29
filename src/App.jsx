import React from "react";
import Layout from "./pages/theme/Layout";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserManagement from "./pages/UserManagement/UserManagement";
import AddUser from "./pages/UserManagement/AddUser";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      {/* <Layout/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/user-management" element={<UserManagement/>} />
            <Route path="/user-management/add" element={<AddUser/>} />
            <Route path="/faq" element={<Faq/>} />
            <Route path="/contact" element={<Contact/>} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
