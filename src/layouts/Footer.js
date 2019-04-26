import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
   return ( 
   <div className="footer">
   <div className="left">
      <h2>company name: </h2>
      <hr/>
      <section className="sectionleft">
      <p>Here you can put name of your company. Right now it is empty...</p>
      </section>
   </div>
   <div className="midleft">
      <h2>products: </h2>
      <hr/>
         <a href ="https://pl.wikipedia.org/wiki/Opel_Astra_H">car</a> <br/>
         <a href ="https://www.harley-davidson.com/us/en/motorcycles/2019/softail/fxdr-114.html">motorbike</a><br/>
         <a href ="https://store.hp.com/us/en/pdp/hp-laptop-15t-touch-optional-3lm40av-1">laptop</a><br/>
         <a href ="https://sprzedajemy.pl/chillblast-fusion-soul-blighter-gaming-pc-rybnik-2-0010c9-nr58515621">Personal Computer</a><br/>
      </div>
      <div className="midright">
      <h2>useful links: </h2>
      <hr/>
      <a href ="https://www.google.com/">Google</a> <br/>
      <a href ="https://reactjs.org/docs/getting-started.html">React Getting started</a><br/>
      <a href ="https://fontawesome.com/">Font awesome</a><br/>
      <a href ="https://blog.newrelic.com/engineering/8-ways-become-a-better-coder/">How to be better</a><br/>
      </div>
      <div className="right">
      <h2 >contact: </h2>
      <hr/>
      <ul className="contact">
         <li>Phone number: 012 345 678</li>
         <li>City: XYZ</li>
         <li>Street: XYZ</li>
         <li>Contact: XYZ@gmail.com</li>
      </ul>
      </div>
   </div> );
}
 
export default Footer;