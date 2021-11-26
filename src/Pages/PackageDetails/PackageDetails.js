import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import "./PackageDetails.css";
import divider from ".././../Images/divider.png";

const PackageDetails = () => {
	const { id } = useParams();
	const [packageDetails, setPackageDetails] = useState([]);
	const [details, setDetails] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/packages")
			.then(res => res.json())
			.then(data => setPackageDetails(data))
	}, []);
	useEffect(() => {
		const detailsData = packageDetails.find(description => description._id === id);
		setDetails(detailsData);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [packageDetails]);

	return (
		<section className="pt-70 pb-70">
			<div className="container">
				<div className="text-center mb-5">
					<h1 className="size-50 t-color-1e fw-bold">Package <span className="t-color-ed">Detials</span></h1>
					<img src={divider} alt="divider" />
				</div>
				<div className="">
					<div className="mb-4 package-details-img">
						<img src={details?.image} alt={details?.title} className="img-fluid" />
					</div>
					<div className="">
						<h3 className="size-25 t-color-23 fw-bold mb-3">{details?.title}</h3>
						<p className="my-2"><span className="me-2"><i class="fas fa-map-marker-alt"></i></span><span>{details?.location}</span></p>
						<p className="mb-4">{details?.placeDescription}</p>
						<a href={details?.pdf} target="_blank" rel='noreferrer' className="mb-3 me-3 px-30 py-13 rounded-pill bg-ed hover2 tran-2 text-white fw-500">Package Details →</a>
						<Link to={`/buyForm/${details?._id}`} className="px-30 py-13 rounded-pill bg-ed hover2 tran-2 text-white fw-500">Buy Now →</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PackageDetails;