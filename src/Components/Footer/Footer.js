import React from 'react';
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="pt-5 bg-1e">
			<div className="container">
				<div className="row g-4 pb-4">
					<div className="col-sm-6">
						<div className="menu-links text-center">
							<h3 className="text-light fw-500 size-25 mb-4">Address</h3>
							<address>
								<p className="text-white mb-2">Sylhet - Ambarkhana</p>
								<p className="text-white mb-2">+8801750543533</p>
								<p className="text-white">saruarhosen525@gmail.com</p>
							</address>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="social-links text-center">
							<h3 className="text-light fw-500 size-25 mb-4">Connect With Us</h3>
							<ul>
								<li className="d-inline-block me-3">
									<a href="https://web.facebook.com/saruarhosenn/" className="tran-2 text-light bg-ed rounded-circle text-center rounded" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
								</li>
								<li className="d-inline-block me-3">
									<a href="https://www.linkedin.com/in/saruarhosenn/" className="tran-2 text-light bg-ed rounded-circle text-center rounded" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
								</li>
								<li className="d-inline-block me-3">
									<a href="https://twitter.com/saruarhosenn/" className="tran-2 text-light bg-ed rounded-circle text-center rounded" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
								</li>
								<li className="d-inline-block">
									<a href="https://www.instagram.com/saruarhosenn/" className="tran-2 text-light bg-ed rounded-circle text-center rounded" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>								
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="copyright text-center py-4">
					<p className="text-light">Copyright &copy; 2021 Saruar Hosen All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;