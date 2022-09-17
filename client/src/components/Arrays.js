import React, { useState, useEffect } from 'react'

const Arrays = () => {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState({ array1code: "", array1done: 0 });
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
      setUserName(data.college);
      setShow(true);

    }
    catch (err) {
      console.log(err.message);
    }

  }
  useEffect(() => {
    userHomePage();
  }, []);
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value })
  }

  const contactForm = async (e) => {
    e.preventDefault();
    const { array1done, array1code } = userData;
    const res = await ('/contact', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        array1code
      })
    });
    const data = await res.json();
    if (!data) {
      console.log("Error")
    }
    else {
      alert("Sent");
    }

  }


  return (
    <>
      <div>
        <div class="login-box login-box3">
          <div className='topics'>
            <h4 className='center'><input type="checkbox" id="vehicle1" name="array1done" value="Bike" onchange={handleInputs}></input>   1. Reverse the Array  {userName} &emsp;<a href="#popup02" class="non">code</a></h4>


            <div id="popup02" class="overlay02">
              <div class="popup02">
                <h2>Reverse the List: </h2>
                <a class="close02" href="#">&times;</a>
                <div class="content02">
                  <textarea class="textarea02" rows="15" id="code" name="array1code" spellcheck="false" placeholder="Your Codes here" onchange={handleInputs} value={userName}></textarea>
                </div>
              </div>
            </div>

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

export default Arrays