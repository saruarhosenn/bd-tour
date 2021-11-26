import React from 'react';
import { Link } from 'react-router-dom';
import "./Package.css";

const Package = ({pkg}) => {

	const {_id, image, title, location, description, price} = pkg;

	return (
		<div className="col-xl-4 col-md-6">
			<div className="p-4 bg-white shadow rounded package">
				<div className="mb-4 package-img">
					<img src={image} alt={title} className="w-100" />
				</div>
				<div className="">
					<h3 className="size-25 t-color-1e fw-bold">{title}</h3>
					<p className="my-2"><span className="me-2"><i class="fas fa-map-marker-alt"></i></span><span>{location}</span></p>
					<p>{description}</p>
					<div className="mt-3 d-flex justify-content-between align-items-center">
						<h4 className="size-18 t-color-1e fw-bold">BDT {price}</h4>
						<Link to={`/packageDetails/${_id}`} className="hover2 px-30 py-13 rounded-pill bg-ed tran-2 text-white fw-500">Details →</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Package;