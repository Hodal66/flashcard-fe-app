import React,{useState,useContext, SyntheticEvent} from 'react'
import { Themecontext } from './context/ThemeContext';
import Navigation from './Home/NavBar/Navigation';

// type UserRegisterProps={
//   fullName: string,
//   email: string,
//   password: string
// }
function Register() {
  const theme =useContext(Themecontext);
  const [fullname, setFullname]=useState('');
  const [email, setEmail]=useState('');
  const [password,setPassword]=useState('');
  // const [isLoading,setIsLoading]=useState(false);
const handleSumitRegister =(e:SyntheticEvent)=>{
e.preventDefault();
}


  return (
  
    <div >
      <Navigation />
      <div style={{display:"flex", alignItems:"center",justifyContent:"center", marginTop:"30px"}}>

     
      <div style={{width:"33%",padding:"25px",backgroundColor:"#eee", borderRadius:"20px",border:"none",boxShadow:"12px 20px #ddd"}}>
      <h1 style={{display:"flex", justifyContent:"center"}}>Hello register</h1>
      <form onSubmit={handleSumitRegister}>
      <div><br/>
        <label>Full Name:</label><br/>
        <input type="text" id="fullname" style={{padding:"10px", width:"30vw",border:"none", borderRadius:"5px", marginTop:"5px",}}
        value={fullname}
        onChange={e=>setFullname(e.target.value)}
        /> 
        </div>
        <div><br/>
        <label>Enter Email:</label><br/>
        <input type="email" id="email" style={{padding:"10px",width:"30vw",border:"none", borderRadius:"5px",marginTop:"5px"  }}
        value={email}
        onChange={e=>setEmail(e.target.value)}

        />
        </div>
        <div><br/>
        <label>Password:</label><br/>
        <input type="password" id="password"  style={{padding:"10px",width:"30vw",border:"none", borderRadius:"5px",marginTop:"5px" }}
        value={password}
        onChange={e=>setPassword(e.target.value)}/>
        </div>
        <button style={{background:theme.primary.main, color:"white",width:"32vw",
        padding:"10px", marginTop:"30px",
        borderRadius:"10px", border:"none"}}>Register</button>
        
      </form>
        
       
      </div>
    </div>
    </div>
  )
}

export default Register;
