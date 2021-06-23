import React ,{useState} from 'react'
const intialformvaules = {Username:'',Password:'',Name:'',Role:'',Termsofservice:false,Email:'',}
const User = []
function Newuser(){
    const[addUser,setAdduser]= useState(Newuser)
    const [formvaules,setformvaules] = useState(intialformvaules)
   function change(evt){
    const {name,value} = evt.target
    setformvaules({...formvaules,[name]:value})
   }
   const yup = []
   function submit(evt){
       evt.preventDefault()
        const newmember = {
            Username: formvaules.Username.trim(),
            Password: formvaules.Password.trim(),
            Role: formvaules.Role.trim(),
            Email: formvaules.Email.trim(),
            Name: formvaules.Name.trim()
        }
        setAdduser([...addUser,newmember])
        setformvaules(intialformvaules)
   }
    return(
        <form onSubmit={submit}>
            <label> UserName
            <input
            type='text'
            value={formvaules.User}
            name='User'
            onChange={change}/>
            </label>
            <label> Password
            <input
            type='text'
            value={formvaules.Password}
            name='Password'
            onChange={change}/>
            </label>
            <label> Name
            <input
            type='text'
            value={formvaules.Name}
            name='Name'
            onChange={change}/>
            </label>
            <label> Email
            <input
            type='text'
            value={formvaules.Email}
            name='Email'
            onChange={change}/>
            </label>
            <label> Role
                <select onChange={change}
                value={formvaules.Role}
                name='Role'>
                    <option value=''></option>
                    <option value='Owner'>Owner</option>
                    <option value='Renter'>Renter</option>

                </select>
            </label>

            <label> Terms of service
            <input
            type='checkbox'
            checked={formvaules.Termsofservice}
            name='Termsofservice'
            onChange={change}/>
            </label>


        </form>
    )
}