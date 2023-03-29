import Detail from "pages/Detail";
import List from "pages/List";
import Main from "pages/Main";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/list" element={<List />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
