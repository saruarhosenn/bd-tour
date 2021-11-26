import React from 'react';
import "./Hero.css";

const Hero = () => {
	return (
		<section className="hero-section">
      <div className="container">
        <div className="hero-title mx-auto text-center">
          <h1 class="size-50 text-white">
            More Tours, More Tickets
          </h1>
          <h2 className="size-25 text-white my-4">No. 1 Online Ticketing Network</h2>
          <div className="call d-flex justify-content-center align-items-center mx-auto">
            <div className="call-title call-content bg-1e p-4">
              <h2 className="size-30 text-white">  
                Please Call
              </h2>
            </div>
            <div className="call-number call-content bg-ed p-4">
              <h2 className="size-30 text-white">+8801750543533</h2>
            </div>
          </div>
        </div>
      </div>
		</section>
	);
};

export default Hero;