import React, { useEffect, useState } from 'react';
import divider from "../../Images/divider.png";
import AllPackage from './AllPackage/AllPackage';

const AllPackages = () => {

	const [ packages, setPackages ] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/packages")
		.then(res => res.json())
		.then(data => setPackages(data))
	}, []);

	return (
		<section className="pt-70 pb-70">
			<div className="container">
				<div className="text-center mb-5">
					<h1 className="size-50 t-color-1e fw-bold">All <span className="t-color-ed">Package</span></h1>
					<img src={divider} alt="divider" />
				</div>
				<div className="row g-3">
					{
						packages.map(pkg => <AllPackage key={pkg._id} pkg={pkg} />)
					}
				</div>
			</div>
		</section>
	);
};

export default AllPackages;