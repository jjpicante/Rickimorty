import { useState } from "react";
import validate from "./validate";


const Form = ({ login }) => {
 
    const [userData, setUserData] = useState({
        username:"",
        password:""
    })

    const [errors, setErrors] = useState({
        username:"",
        password:""
    })

    const handleInputChange = (event) =>{
       setUserData({
        ...userData,
        [event.target.name]: event.target.value
       }
       )
       setErrors(
        validate({
            ...userData,
            [event.target.name]: event.target.value
           }
       ))
       }

    const handleSubmit = () =>{
        login(userData)
    }
       return(
           <div>
           <form onClick={handleSubmit}>
               <label htmlFor="username">Username</label>
               <input type="text" name='username' value={userData.username} onChange={handleInputChange}/>
               {errors.username && <p style={{color:'red', fontWeight: 'bolder'}}>{errors.username}</p>}
               <label htmlFor="password">Password</label>
               <input type="password" name='password' value={userData.password} onChange={handleInputChange}/>
               {errors.password && <p style={{color:'red', fontWeight: 'bolder'}}>{errors.password}</p>}
               <button>LOGIN</button>
           </form>
           </div>
       )
   }
   
   export default Form;

       
        
