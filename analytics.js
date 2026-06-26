import ReactGA from "react-ga4";


export function initializeAnalytics(){


const GA_ID = import.meta.env.VITE_GA_ID;


if(GA_ID){

ReactGA.initialize(GA_ID);


ReactGA.send({

hitType:"pageview",

page:window.location.pathname

});


}


}