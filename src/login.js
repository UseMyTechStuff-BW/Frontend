import React ,{useState} from 'react'
const intialformvaules = {User:'',Password:''}
function Login(){
    const [formvaules,setformvaules] = useState(intialformvaules)
   function change(evt){
    const {name,value} = evt.target
    setformvaules({...formvaules,[name]:value})
   }
   function submit(){
    evt.preventDefault()

   }
    return(
        <form onSubmit>
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
        </form>
    )
}