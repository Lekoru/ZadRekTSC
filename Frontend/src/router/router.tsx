import {Route, Routes} from "react-router-dom";
import React from "react";
import Zad1 from "../views/Zad1";
export const Router = () => {
  return(
    <Routes>
      <Route path='/' element={<Zad1/>}/>
      <Route path='*' element={<Zad1/>}/>
    </Routes>
  )
}