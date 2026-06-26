import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import "./navbar.css";


function Navbar(){

const [open,setOpen]=useState(false);


return (

<header className="navbar">


<div className="container nav-container">


<div className="logo">

<a href="#" className="logo">
  Out<span>Pro</span>
</a>
<span className="dot">.</span>
INDIA

</div>



<div 
className={open ? "nav-links active":"nav-links"}
>


<Link to="/">Home</Link>

<Link to="/about">
About
</Link>


<Link to="/services">
Services
</Link>


<Link to="/portfolio">
Portfolio
</Link>


<Link to="/careers">
Careers
</Link>


<Link 
className="nav-btn"
to="/contact"
>

Contact

</Link>


</div>



<button 
className="menu"
onClick={()=>setOpen(!open)}
>


{
open?
<HiX/>:
<HiMenuAlt3/>
}


</button>


</div>


</header>

);

}


export default Navbar;