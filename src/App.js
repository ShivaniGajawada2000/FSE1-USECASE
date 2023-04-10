import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import Test from "./components/Test";
import AllProduct from "./components/AllProduct";
import AddProduct from "./components/AddProduct";
import DeleteProduct from "./components/DeleteProduct";
import UpdateProduct from "./components/UpdateProduct";

 


// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";
import SearchProduct from "./components/SearchProduct";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  
  
  
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div className="app-bg">
      <nav className="navbar navbar-expand navbar-light " id="nav">
    {/* <img src="shoppingicon.png" width="40" height="40" alt=""/> &nbsp;*/ }  
      
        <Link to={"/home"} className="navbar-brand mb-0 h1">
         Insta Cart
        </Link>
        <div className="navbar-nav mr-auto">
          {/* <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li> */}

        {/* Showing All Products */}
          <li className="nav-item">
            <Link to={"/all"} className="nav-link">
              All Products
            </Link>
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board n
              </Link>
            </li>
          )}

          

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add product
              </Link>
            </li>
          )}  

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/delete"} className="nav-link">
                delete And Update Product
              </Link>
            </li>
          )}

         

          {/* {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )} */}

          {/* Search Product By Name */}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/search"} className="nav-link">
              search
              </Link>
              
            </li>
          )}  

        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            
            <li className="nav-item">
           <button className="btn btn-outline-dark " style={{marginRight:10}}>
             <Link to={"/login"} style={{color:"black"}}>login</Link>
            </button>
            </li>
          
            <li className="nav-item">
            <button className="btn btn-outline-dark " >
              <Link to={"/register"} style={{color:"black"}}>
                Sign Up
              </Link>
              </button>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route exact path={"/"} element={<AllProduct />} />
          {/* <Route exact path={"/home"} element={<Home />} /> */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />
          <Route path="/test" element={<Test />} />
          <Route path="/all" element={<AllProduct />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/search" element={<SearchProduct />} />
          <Route path="/delete" element={<DeleteProduct />} />
          <Route path="/update" element={<UpdateProduct />} />
        </Routes>
      </div>

      {/* <AuthVerify logOut={logOut}/> */}
    </div>
  );
};

export default App;
