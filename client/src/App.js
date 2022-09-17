import React, { createContext, useReducer } from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Solve from "./components/Solve";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Error from "./components/Error"
import Logout from "./components/Logout"
import Ide from "./components/Ide";
import Arrays from "./components/Arrays"
import "./App.css"
import { initialState, reducer } from "../src/reducer/useReducer";
export const UserContext = createContext();
const Routing = () => {
  return (
    <switch>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/solve" element={<Solve />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/ide" element={<Ide />} />
        <Route path="/arrays" element={<Arrays />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </switch>
  )
}
const App = () => {
  const [state, dispatch ] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />

        <Routing />

      </UserContext.Provider>
    </>
  )
}

export default App









