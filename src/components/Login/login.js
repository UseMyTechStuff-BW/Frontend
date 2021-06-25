import axios from 'axios'
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'


const initialFormValues = {
    User: '',
    Password: ''}

function Login() {

    const {push} = useHistory()
    const [formValues, setFormValues] = useState(initialFormValues)

   function change (evt) {
        const {name,value} = evt.target
        setFormValues({...formValues,[name]:value})
   }

   function submit (evt) {
        evt.preventDefault();
        axios
            .post(`https://usemytechstufflambda.herokuapp.com/api/auth/login`, initialFormValues)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
            })
        push('/marketplace')
   }

    return(
        <form onSubmit={submit}>
            <label>
                 UserName
            <input
                type='text'
                value={formValues.User}
                name='User'
                onChange={change}/>
            </label>
            <label>
                 Password
            <input
                type='text'
                value={formValues.Password}
                name='Password'
                onChange={change}/>
            </label>
            <button> Log In </button>
        </form>
    )
}

export default Login;