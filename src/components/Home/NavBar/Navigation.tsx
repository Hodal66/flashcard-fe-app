import React,{useContext} from 'react'
import { Themecontext } from '../../context/ThemeContext';
import {Link} from 'react-router-dom';
import logo from "../../../assets/logo.jpg"
function Navigation() {
  const theme =useContext(Themecontext);
  return (
    <div style={{display:"flex", padding:theme.primary.fontSize,
     backgroundColor:theme.primary.main,
     color:theme.primary.text, justifyContent:"space-around",height:"30%"}}>

      <div style={{backgroundColor:theme.secondary.main}}>
          <img src={logo} alt="hodalLogo"  style={{width:"20vh", height:"10vh"}}/>
      </div>
      
      <div style={{display:"flex",border:"none",gap:theme.secondary.fontSize,
    padding:theme.primary.fontSize}}>
        
        <Link to="/">
          <button style={{background:theme.secondary.text,
          padding:"5px 30px",border:"none", borderRadius:"10px"}}>Home</button>
        </Link>
        <Link to="/about">
          <button style={{background:theme.secondary.text,border:"none", borderRadius:"10px",
          padding:"5px 30px"}}>About</button>
        </Link>
        <Link to="/login">
          <button style={{background:theme.secondary.text,border:"none", borderRadius:"10px",
          padding:"5px 30px"}}>Login</button>
        </Link>
        <Link to="/register">
          <button style={{background:theme.secondary.text,border:"none", borderRadius:"10px",
          padding:"5px 30px"}}>Register</button>
        </Link>

      </div>
    </div>
  )
}

export default Navigation;
