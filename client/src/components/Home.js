import React, { useState, useEffect } from 'react'

const Home = () => {
  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch('/getdata', {

        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },

      });
      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setShow(true);

    }
    catch (err) {
      console.log(err.message);
    }

  }
  useEffect(() => {
    userHomePage();
  }, []);
  return (
    <>
      <div className="login-box ">

        <h1 className='center'>Hello {userName}<br />Welcome to, <br />The world of DSA</h1>



      </div>
    </>
  )
}

export default Home