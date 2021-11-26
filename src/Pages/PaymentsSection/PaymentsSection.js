import React from 'react';
import divider from "../../Images/divider.png";
import payments from "../../Images/payments.png";

const PaymentsSection = () => {
	return (
		<section className="pt-70 pb-70">
			<div className="container">
				<div className="text-center mb-5">
					<h1 className="size-50 t-color-1e fw-bold">We <span className="t-color-ed">Accept</span></h1>
					<img src={divider} alt="divider" />
				</div>
				<div className="text-center">
					<img src={payments} alt={payments} className="img-fluid" />
				</div>
			</div>
		</section>
	);
};

export default PaymentsSection;