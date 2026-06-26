const projects=[

{
name:"Corporate Digital Platform",
details:"Premium website with CMS and analytics."
},


{
name:"E-Commerce System",
details:"Complete shopping platform."
},


{
name:"Mobile Application",
details:"Cross-platform business application."
}


];


function PortfolioPage(){


return (

<section className="section">


<div className="container">


<h1 className="heading">

Portfolio

</h1>




<div className="portfolio-detail-grid">


{

projects.map((project,index)=>(


<div className="card"

key={index}

>


<h2>

{project.name}

</h2>


<p>

{project.details}

</p>


<h4>

KPI Highlights

</h4>


<ul>

<li>
40% Faster Performance
</li>

<li>
Improved User Engagement
</li>

<li>
Mobile Optimized
</li>

</ul>


</div>


))


}



</div>


</div>


</section>


);


}


export default PortfolioPage;