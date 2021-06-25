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
  #sign-up {
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
  }
  
`

const initialFormValues = {
    Username:'',
    Password:'',
    Name:'',
    Role:'',
    TermsOfservice: false,
    Email:'',
}

function Newuser(){
    const [formValues, setFormValues] = useState(initialFormValues)

   function change(evt){

    const { name, value } = evt.target
    setFormValues({ ...formValues, [name]:value })
   }

   function submit(evt){

       evt.preventDefault()

        const newUser = {
            Username: formValues.Username,
            Password: formValues.Password.trim(),
            Role: formValues.Role.trim(),
            Email: formValues.Email.trim(),
            Name: formValues.Name.trim()
        }

        console.log("This is the new user", newUser)

        setFormValues(initialFormValues)
   }

    return(
        <>
        <StyledDiv>
        <div className='form-container'>

        <div>
        <h2 id="sign-up">Sign up</h2>
        </div>

        <form onSubmit={submit}>
            <label>Username
            <input
                type='text'
                value={formValues.Username}
                name='Username'
                onChange={change}/>
            </label>

            <label>Password
            <input
                type='password'
                value={formValues.Password}
                name='Password'
                onChange={change}/>
            </label>

            <label>Name
            <input
                type='text'
                value={formValues.Name}
                name='Name'
                onChange={change}/>
            </label>

            <label>Email
            <input
                type='email'
                value={formValues.Email}
                name='Email'
                onChange={change}/>
            </label>

            <label>Role
                <select onChange={change}
                value={formValues.Role}
                name='Role'>
                    <option value=''>--Select Role--</option>
                    <option value='Owner'>Owner</option>
                    <option value='Renter'>Renter</option>
                </select>
            </label>

            <label>Terms of service
            <input
                type='checkbox'
                checked={formValues.TermsOfservice}
                name='TermsOfservice'
                onChange={change}/>
            </label>
            
            <button>Create account</button>
        </form>
        </div>
        </StyledDiv>
        </>
    )
}

export default Newuser;