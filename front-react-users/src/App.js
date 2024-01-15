import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Home";
import Create from "./Create";
import Update from "./Update";
const App = () => {
  const [formId,setForm] = useState(0);
  function handleClick(id){
    setForm(id);
  }
  let url = `/update/${formId}`;
  console.log(url);
  console.log("form",formId);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onButtonUpdateClick={handleClick}/>} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update id={formId} />}/>
      </Routes>
    </Router>
  );
};

export default App;
