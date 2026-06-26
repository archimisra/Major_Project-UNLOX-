const reviews=[

{
name:"Raj Sharma",
text:"Outstanding experience. The website transformed our online presence."
},


{
name:"Ananya Kapoor",
text:"Professional team with excellent design and development skills."
}


];



function Testimonials(){


return (

<section className="section">


<h2 className="heading">

Client 
<span className="gradient-text">
Testimonials
</span>

</h2>



<div className="container testimonial-grid">


{

reviews.map((review,index)=>(


<div className="card"

key={index}

>


<p>
"{review.text}"
</p>


<h4>
{review.name}
</h4>


</div>


))


}



</div>


</section>


);


}


export default Testimonials;