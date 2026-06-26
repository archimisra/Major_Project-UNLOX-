import {

FaCode,
FaMobileAlt,
FaCloud,
FaPaintBrush

}

from "react-icons/fa";


const services=[


{
icon:<FaCode/>,
title:"Web Development",
text:"Modern responsive websites built with scalable technologies."
},


{
icon:<FaMobileAlt/>,
title:"Application Development",
text:"High-performance mobile and web applications."
},


{
icon:<FaCloud/>,
title:"Cloud Solutions",
text:"Secure cloud architecture and deployment."
},


{
icon:<FaPaintBrush/>,
title:"UI/UX Design",
text:"Premium interfaces focused on user experience."
}


];


function Services() {
  return (
    <section id="services-section" className="services">
      <div className="container">
        
        {/* Unified Section Header Alignment */}
        <div className="section-header">
          <h2>Our Services</h2>
          <p>We craft end-to-end digital engineering systems optimized for performance.</p>
        </div>

        <div className="services-grid">
          {/* Example of card layout inside map loops */}
          <div className="service-card">
            <h3>Web Architecture</h3>
            <p>Custom production-grade applications engineered with scalability at their core.</p>
            <a href="#contact-section" className="btn btn-secondary">Learn More</a>
          </div>
        </div>

      </div>
    </section>
  );
}


export default Services;