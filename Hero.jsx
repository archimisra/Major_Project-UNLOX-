import {motion} from "framer-motion";


function Hero(){


return (

<section className="hero">


<div className="container hero-content">


<motion.div

initial={{opacity:0,y:50}}

animate={{opacity:1,y:0}}

transition={{duration:0.8}}

>



<h1>

Transforming Businesses
with 

<span>
Digital Innovation
</span>

</h1>



<p>

We design high-performance digital platforms,
web applications and technology solutions
that help companies scale faster.

</p>



<div className="hero-cta-group">
  <a href="#services-section" className="btn btn-primary">
    Explore Services
  </a>
  <a href="#portfolio-section" className="btn btn-secondary">
    View Portfolio
  </a>
</div>


</motion.div>




<div className="hero-image">


<div className="floating-card">

⚡
Premium Web Solutions

</div>


<div className="dashboard">


<div></div>
<div></div>
<div></div>



</div>


</div>



</div>


</section>

);


}


export default Hero;