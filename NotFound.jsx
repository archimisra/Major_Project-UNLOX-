import {Link} from "react-router-dom";


function NotFound(){


return(

<section className="section">


<div className="container">


<h1 className="heading">

404

</h1>


<p>
Page not found
</p>


<Link className="btn" to="/">

Return Home

</Link>


</div>


</section>

);


}


export default NotFound;