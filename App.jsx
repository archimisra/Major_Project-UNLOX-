import {

BrowserRouter,
Routes,
Route

} from "react-router-dom";


import Home from "./Home";
import About from "./About";
import ServicesPage from "./ServicesPage";
import PortfolioPage from "./PortfolioPage";
import Careers from "./Careers";
import ServiceDetails from "./ServiceDetails";
import NotFound from "./NotFound";
import AnalyticsTracker from "./AnalyticsTracker";


import Navbar from "./Navbar";
import Footer from "./Footer";



function App(){


return (

<BrowserRouter>
<AnalyticsTracker/>


<Navbar/>


<Routes>


<Route 
path="/" 
element={<Home/>}
/>


<Route 
path="/about"
element={<About/>}
/>


<Route 
path="/services"
element={<ServicesPage/>}
/>


<Route 
path="/portfolio"
element={<PortfolioPage/>}
/>


<Route 
path="/careers"
element={<Careers/>}
/>
<Route 
path="/services/details"
element={<ServiceDetails/>}
/>
<Route 
path="*"
element={<NotFound/>}
/>



</Routes>



<Footer/>


</BrowserRouter>


);


}


export default App;
