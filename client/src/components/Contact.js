import React, { useEffect, useState } from 'react'

const Contact = () => {
  const [userData, setUserData] = useState({});
  const userContact = async () => {
    try {
      const res = await fetch('/getdata', {

        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    }
    catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    userContact();
  }, []);
  return (
    <div>We are contact</div>
  )
}

export default Contact