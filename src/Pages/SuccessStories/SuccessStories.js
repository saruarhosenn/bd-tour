import React from 'react';
import divider from "../../Images/divider.png";
import jhankar from "../../Images/clinet/jhankar.jpg";
import foysal from "../../Images/clinet/foysal.jpg";
import "./SuccessStories.css";

const SuccessStories = () => {
	return (
		<section className="pt-70 pb-70" style={{backgroundColor: "#F2F3F9"}}>
			<div className="container pb-4">
				<div className="text-center mb-5">
					<h1 className="size-50 t-color-1e fw-bold">Our Success <span className="t-color-ed">Stories</span></h1>
					<img src={divider} alt="divider" />
				</div>
				<div className="row g-4">
					<div className="col-md-6">
						<div className="border p-4">
							<div className="description">
								<span className="t-color-ed size-40"><i class="fas fa-quote-left"></i></span>
								<p className="mt-2">Traveled by both bus and air several times. service is nice as expected. got a refund within 20 minutes! think this is the best refund policy in Bangladesh. good luck.</p>
							</div>
							<div className="clinet-img d-flex align-items-center mt-4">
								<img src={jhankar} alt={jhankar} className="rounded-circle" />
								<h5 className="ms-3 size-18 t-color-1e fw-bold">Jhankar Mahbub</h5>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="border p-4">
							<div className="description">
								<span className="t-color-ed size-40"><i class="fas fa-quote-left"></i></span>
								<p className="mt-2">Our travel planner and his team have made an amazing trip together in a challenging environment. We had a lot of fun. Thanks to the BDTickets team for arranging it.</p>
							</div>
							<div className="clinet-img d-flex align-items-center mt-4">
								<img src={foysal} alt={foysal} className="rounded-circle" />
								<h5 className="ms-3 size-18 t-color-1e fw-bold">Foysal Hasan</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
	</section>
	);
};

export default SuccessStories;