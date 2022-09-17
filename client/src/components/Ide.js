import React from 'react'
import { NavLink } from 'react-router-dom'

const Ide = () => {
    return (
        <div>
             <div class="login-box login-box3">

                <center >
                <h1>ONLINE IDE</h1>

                <form action="compilecode" method="post" name="myform" id="myform">
                    <h3>Code</h3>
                    <textarea cols="50" rows="10" id="code" name="code" spellcheck="false"></textarea>
                    <br />
                    <h3>Input</h3>
                    <textarea cols="50" rows="10" id="input" name="input" spellcheck="false"></textarea>
                    <br />
                    Language:
                    <select name="lang" id="">
                        <option value="C">C</option>
                        <option value="Java">Java</option>
                        <option value="Python">Python</option>
                    </select>
                    Complie With Input:
                    <input type="radio" name="inputRadio" id="inputRadio" value="true" />Yes
                    <input type="radio" name="inputRadio" id="inputRadio" value="false" />No
                    <br />
                    <br />

                    <input type="submit" value="Submit" name="Submit" />

                </form>
                </center>
            </div> 
        </div>
    )
}

export default Ide