import React from 'react';
import "./CounterUp.css";
import ticket from "../../../Images/ticket-icon-2.png";
import man from "../../../Images/man-icon.png";
import bd from "../../../Images/bd-icon.png";

const CounterUp = () => {
	return (
		<section className="pt-70 pb-70 bg-1e">
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-sm-6 mb-5 mb-md-0">
						<div className="text-center count-text">
							<div className="icon rounded-circle bg-ed mx-auto mb-4 d-flex justify-content-center align-items-center">
								<img src={ticket} alt={ticket} />
							</div>
							<h2 className="text-white size-40">75,000</h2>
							<h3 className="size-18 fw-bold t-color-1e mt-3 text-white" >TICKETS AVAILABLE PER DAY</h3>
						</div>
					</div>
					<div className="col-md-4 col-sm-6 mb-5 mb-md-0">
						<div className="text-center count-text">
							<div className="icon rounded-circle bg-ed mx-auto mb-4 d-flex justify-content-center align-items-center">
								<img src={man} alt={man} />
							</div>
							<h2 className="text-white size-40">1,00,000</h2>
							<h3 className="size-18 fw-bold t-color-1e mt-3 text-white" >HAPPY CUSTOMERS</h3>
						</div>
					</div>
					<div className="col-md-4 mx-auto">
						<div className="text-center count-text">
							<div className="icon rounded-circle bg-ed mx-auto mb-4 d-flex justify-content-center align-items-center">
								<img src={bd} alt={bd} />
							</div>
							<h2 className="text-white size-40">60</h2>
							<h3 className="size-18 fw-bold t-color-1e mt-3 text-white" >DISTRICTS COVERED</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CounterUp;