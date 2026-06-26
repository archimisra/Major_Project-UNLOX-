import {Link} from "react-router-dom";


const services=[

{
title:"Website Development",
desc:"Corporate websites, landing pages and scalable platforms."
},

{
title:"Mobile Applications",
desc:"Android and iOS applications with modern architecture."
},

{
title:"Cloud Solutions",
desc:"Cloud deployment, security and infrastructure."
},

{
title:"UI/UX Design",
desc:"Research-driven interfaces and user experiences."
},

{
title:"Digital Marketing",
desc:"SEO, analytics and growth strategies."
},

{
title:"Software Solutions",
desc:"Custom enterprise software development."
}

];


function ServicesPage(){


return (

<section className="section">


<div className="container">


<h1 className="heading">

Our 
<span className="gradient-text">
Services
</span>

</h1>



<div className="service-large-grid">


{

services.map((service,index)=>(


<div className="card"

key={index}

>


<h2>
{service.title}
</h2>


<p>
{service.desc}
</p>


<Link

className="btn"

to="/services/details"

>

Learn More

</Link>


</div>


))

}


</div>


</div>


</section>


);


}


export default ServicesPage;