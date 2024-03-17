import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div class="page">
        <Header/>
      <div class="content-row">
          <Sidebar/>
          
          <div class="body"><h2 class="text right">ᚱᛁᚷᚺᛏ ᚾᚢᛏ</h2><Outlet/></div>
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
