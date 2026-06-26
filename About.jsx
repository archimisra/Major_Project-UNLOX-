import {motion} from "framer-motion";


function About(){


return (

<section className="section page">


<div className="container">


<motion.h1

initial={{opacity:0}}

animate={{opacity:1}}

className="heading"

>

About 
<span className="gradient-text">
 Outpro India
</span>

</motion.h1>



<div className="about-content">


<div className="card">


<h2>
Our Story
</h2>


<p>

Outpro India is a digital transformation company
focused on creating premium websites,
software solutions and scalable technology
platforms for businesses.

</p>


<p>

Our goal is to combine creativity,
engineering and strategy to build digital
experiences that create measurable impact.

</p>


</div>




<div className="card">


<h2>
Mission & Vision
</h2>


<p>

<strong>
Mission:
</strong>

Deliver innovative digital solutions
that empower organizations.

</p>


<p>

<strong>
Vision:
</strong>

Become a globally trusted technology
partner for businesses.

</p>


</div>


</div>




<h2 className="heading">

Leadership Team

</h2>



<div className="team-grid">


<div className="card">

<h3>
CEO
</h3>

<p>
Technology & Business Strategy
</p>

</div>


<div className="card">

<h3>
CTO
</h3>

<p>
Engineering & Innovation
</p>

</div>


<div className="card">

<h3>
Design Head
</h3>

<p>
Creative Experience
</p>

</div>


</div>


</div>


</section>


);


}


export default About;