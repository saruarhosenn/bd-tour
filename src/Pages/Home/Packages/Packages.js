import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import divider from "../../../Images/divider.png";
import Package from './Package/Package';

const Packages = () => {

	const [ packages, setPackages ] = useState([]);
	const [ homePackage, setHomePackage ] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/packages")
		.then(res => res.json())
		.then(data => setPackages(data))
	}, []);

	useEffect(() => {
		const data = packages.filter(pkgs => pkgs.display);
		setHomePackage(data);
	}, [packages]);

	return (
		<section className="pt-70 pb-70">
			<div className="container">
				<div className="text-center mb-5">
					<h1 className="size-50 t-color-1e fw-bold">Find Your <span className="t-color-ed">Vacation Package</span></h1>
					<img src={divider} alt="divider" />
				</div>
				<div className="row g-3">
					{
						homePackage.map(pkg => <Package key={pkg._id} pkg={pkg} />)
					}
				</div>
				<div className="mt-5 text-center">
					<Link to="/packages" className="hover px-30 py-13 rounded-pill bg-1e tran-2 text-white fw-500">See All Packages →</Link>
				</div>
			</div>
		</section>
	);
};

export default Packages;