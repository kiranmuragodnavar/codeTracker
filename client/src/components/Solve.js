import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
const Solve = () => {
  const history = useNavigate();
  const [userData, setUserData] = useState({});
  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {

        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await res.json();
      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    }
    catch (err) {
      console.log(err.message);
      history('/login');
    }
  }
  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <>
      <div>
        <div class="login-box login-box3">
          <div className='topics'>
          <NavLink className="nav-link" to="/Arrays"><h2 className='center'>Arrays </h2></NavLink>
          </div>
          <div className='topics'>
            <h2 className='center'>Matrix</h2>
          </div>
          <div className='topics'>
            <h2 className='center'>Strings</h2>
          </div>
          <div className='topics'>
            <h2 className='center'>Searching and Sorting</h2>
          </div>
          <div className='topics'>
            <h2 className='center'>Linked List</h2>
          </div>
          <div className='topics'>
            <h2 className='center'>Bits</h2>
          </div>
          <div className='topics'>
            <h2 className='center'>Greedy</h2>
          </div>
          <div className='topics'>
            <h2 className='center'>Backtracking</h2>
          </div>
          <div className='topics'>
            <h2 className='center'>Dynamic Programming</h2>
          </div>
          <div className='topics'>
            <h2 className='center'>Stacks and Queues</h2>
          </div>
          <div className='topics'>
            <h2 className='center'>Binary Trees</h2>
          </div>
          <div className='topics'>
            <h2 className='center'>Binary Search Trees</h2>
          </div>
          <div className='topics'>
            <h2 className='center'>Graphs</h2>
          </div>
          <div className='topics'>
            <h2 className='center'>Heaps</h2>
          </div>
          <div className='topics'>
            <h2 className='center'>Tries</h2>
          </div>

        </div>
      </div>
    </>
  )
}


export default Solve