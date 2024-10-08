import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateChannel from "./pages/CreateChannel";

export default function App(){
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createchannel" element={<CreateChannel/>}/>
      <Route path="/" element={<Main />} />
    </Routes>
  </BrowserRouter>
  )
};
