import React from 'react';
import "./Contact.css";
import divider from "../../Images/divider.png";

const Contact = () => {
	return (
		<section className="pt-70 pb-70">
			<div className="container">
				<div className="text-center mb-5">
					<h1 className="size-50 t-color-1e fw-bold">Get In <span className="t-color-ed">Touch</span></h1>
					<img src={divider} alt="divider" />
				</div>
				<div className="row g-5">
					<div className="col-lg-4 col-md-6">
						<div className="address-icon text-center shadow bg-white">
							<a class="p-5 d-block" href="tel:+8801750543533">
								<i class="fas fa-phone size-50 t-color-ed"></i>
								<p className="font-size-18 fw-500 mt-4 t-color-1e">+8801750543533</p>
							</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="address-icon text-center shadow bg-white">
							<a class="p-5 d-block" href="mailto:saruarhosen525@gmail.com">
								<i class="fas fa-envelope size-50 t-color-ed"></i>
								<p className="font-size-18 fw-500 mt-4 t-color-1e">saruarhosen525@gmail.com</p>
							</a>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="p-5 address-icon text-center shadow bg-white">
							<i class="fas fa-university size-50 t-color-ed"></i>
							<p className="font-size-18 fw-500 mt-4 t-color-1e">Sylhet, Bangladesh</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;