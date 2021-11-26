import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css";

const NotFound = () => {
	return (
		<section id="notfound">
			<div class="notfound text-center">
				<div class="notfound-404">
					<h1 className="fw-bold">4<span>0</span>4</h1>
				</div>
				<p className="fw-500 text-light">Page Not Found</p>
				<Link to="/home" className="btn-404 link text-light fw-500">Home</Link>
			</div>
		</section>
	);
};

export default NotFound;