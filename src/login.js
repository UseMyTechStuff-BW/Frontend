import React, { useState } from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin-top: 100px;
    form {
        display: flex;
        flex-direction: column;
        box-shadow: 0 -1px 0 #ffffff, 0 0 4px rgba(0, 0, 0, 0.12),
        0 2px 4px rgba(0, 0, 0, 0.25);
        padding: 20px;
        width: 500px;
        margin: auto;
        border-radius: 0 0 10px 10px;
        background-color: white;
      }
      input {
        padding: 5px;
      }
      label {
        display: flex;
        margin-bottom: 16px;
        justify-content: space-between;
        color: black;
        font-family: 'Noto Sans JP', sans-serif;
      }
      #login {
        background-color: black;
        background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80');
        background-position: center;
        width: 510px;
        height: 25px;
        margin: auto;
        color: white;
        border-radius: 10px 10px 0 0;
        padding: 15px;
        box-shadow: 0 -1px 0 #c0c0c0, 0 0 4px rgba(0, 0, 0, 0.12),
        0 2px 4px rgba(0, 0, 0, 0.25);
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
      }
      button {
          padding: 10px;
          background-color: lightblue;
          color: white;
          font-family: 'Roboto', sans-serif;
          border-radius: 30px;
          border: solid 1px;
          width: 350px;
          margin: auto;
          margin-top: 20px;
      }
`

const intialformvaules = {User:'',Password:''}

function Login(){
    const [formvaules,setformvaules] = useState(intialformvaules)
    
    function change(evt){

    const {name,value} = evt.target

    setformvaules({...formvaules,[name]:value})
   }

//    function submit(){
//     evt.preventDefault()
//    }

    return(
        <>
        <StyledDiv>

        <div>
        <h2 id="login">Log in</h2>
        </div>

        <div className='form-container'></div>
        <form onSubmit>
            <label> Username
            <input
            type='text'
            value={formvaules.User}
            name='User'
            onChange={change}/>
            </label>
            <label> Password
            <input
            type='password'
            value={formvaules.Password}
            name='Password'
            onChange={change}/>
            </label>

            <button>Log in</button>
        </form>

        </StyledDiv>
        </>
    )
}

export default Login;