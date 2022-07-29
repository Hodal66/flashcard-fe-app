import React,{useState,useContext} from 'react'
import { Themecontext } from './context/ThemeContext';
import Navigation from './Home/NavBar/Navigation';

// type UserRegisterProps={
//   fullName: string,
//   email: string,
//   password: string
// }
function Register() {
  const theme =useContext(Themecontext);
  // const [fullname, setFullname]=useState('');
  // const [email, setEmail]=useState('');
  // const [password,setPassword]=useState('');
  // const [isLoading,setIsLoading]=useState(false);
  // const handleChane =()=>{
      
  // }
  return (
  
    <div >
      <Navigation />
      <div style={{display:"flex", alignItems:"center",justifyContent:"center", marginTop:"30px"}}>

     
      <div style={{ border:"1px solid #990",width:"33%",padding:"25px",backgroundColor:"#eee", borderRadius:"20px"}}>
      <h1 style={{display:"flex", justifyContent:"center"}}>Hello register</h1>
      <form>
      <div><br/>
        <label>Full Name:</label><br/>
        <input type="text" id="fullname" style={{padding:"5px 10px", width:"30vw" }}/> 
        </div>
        <div><br/>
        <label>Enter Email:</label><br/>
        <input type="email" id="email" style={{padding:"5px 10px",width:"30vw"  }}/>
        </div>
        <div><br/>
        <label>Password:</label><br/>
        <input type="password" id="password"  style={{padding:"5px 10px",width:"30vw", }}/>
        </div>
        <button style={{background:theme.primary.main, color:"white",width:"32vw",
        padding:"5px 10px", marginTop:"30px",
        borderRadius:"10px"}}>Register</button>
        
      </form>
        
       
      </div>
    </div>
    </div>
  )
}

export default Register;
