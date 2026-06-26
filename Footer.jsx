import {
FaLinkedin,
FaInstagram,
FaFacebook,
FaTwitter
}
from "react-icons/fa";


function Footer(){


return (

<footer className="footer">


<div className="container footer-grid">


<div>


<h2>
OUTPRO INDIA
</h2>


<p>

Building powerful digital experiences
for modern businesses.

</p>


</div>




<div>


<h3>
Quick Links
</h3>


<p>Home</p>
<p>Services</p>
<p>Portfolio</p>
<p>Careers</p>


</div>




<div>


<h3>
Contact
</h3>


<p>
info@outproindia.com
</p>


<p>
+91 98765 43210
</p>


</div>




<div>


<h3>
Follow Us
</h3>


<div className="social">


<FaLinkedin/>

<FaInstagram/>

<FaFacebook/>

<FaTwitter/>


</div>


</div>



</div>


<div className="copyright">


© 2026 Outpro India. All Rights Reserved.


</div>


</footer>


);


}


export default Footer;