import {motion} from "framer-motion";


const data=[

{
number:"150+",
text:"Projects Delivered"
},

{
number:"50+",
text:"Happy Clients"
},

{
number:"10+",
text:"Industry Experts"
},

{
number:"99%",
text:"Client Satisfaction"
}


];


function Metrics(){


return (

<section className="metrics">


<div className="container metric-grid">


{
data.map((item,index)=>(

<motion.div

className="metric-card"

key={index}

whileHover={{
scale:1.05
}}

>


<h2>
{item.number}
</h2>


<p>
{item.text}
</p>


</motion.div>


))
}


</div>


</section>


);


}


export default Metrics;