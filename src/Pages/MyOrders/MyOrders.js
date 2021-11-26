import React, { useEffect, useState } from 'react';
import useAouth from '../../Hooks/useAouth';
import divider from "../../Images/divider.png";

const MyOrders = () => {

	const {user} = useAouth();
	const email = user?.email;
	const [orderPackages, setOrderPackages] = useState([]);
	const [deletePackage, setdeletePackage] = useState(false);

	useEffect(() => {
		fetch(`http://localhost:5000/myorderpackages?email=${email}`)
			.then(res => res.json())
			.then(data => setOrderPackages(data))
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [deletePackage]);
	
	const handleDelte = id => {
		const proceed = window.confirm("Are you sure, you want to delete the package?");
		if (proceed) {
			fetch(`http://localhost:5000/myorderpackages/${id}`, {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
			})
			.then(res => res.json())
			.then(data => {
				setdeletePackage(data);
				if (data.deleteCount > 0) {
					deletePackage(true);
				};
			});
		};
	};

	return (
		<section className="pt-70 pb-70">
			<div className="container">
				<div className="text-center mb-5">
					<h1 className="size-50 t-color-1e fw-bold">Your <span className="t-color-ed">Orders</span></h1>
					<img src={divider} alt="divider" />
					<h3 className="size-25 t-color-1e fw-bold mt-4">Total Orders Package: {orderPackages.length}</h3>
				</div>
				<div className="row g-3">
					{
						orderPackages.map(pkg => 
							<div className="col-xl-4 col-md-6" key={pkg._id}>
								<div className="p-4 bg-white shadow rounded package">
									<div className="mb-4 package-img">
										<img src={pkg.image} alt={pkg.title} className="w-100" />
									</div>
									<div className="">
										<h3 className="size-25 t-color-1e fw-bold">{pkg.title}</h3>
										<p className="my-2"><span className="me-2"><i class="fas fa-map-marker-alt"></i></span><span>{pkg.location}</span></p>
										<p>{pkg.description}</p>
										<div className="mt-3">
											<h4 className="size-18 t-color-1e fw-bold mb-2">Booking Date: {pkg.date}</h4>
											<h4 className="size-18 t-color-1e fw-bold mb-2">Total Person: {pkg.person}</h4>
											<h4 className="size-18 t-color-1e fw-bold mb-2">Total Days: {pkg.days}</h4>
											<h4 className="size-18 t-color-1e fw-bold mb-3">Total Price BDT: {pkg.price}</h4>
											<button onClick={() => handleDelte(pkg._id)} className="hover2 px-30 py-13 rounded-pill bg-ed tran-2 text-white fw-500">Delete Package →</button>
										</div>
									</div>
								</div>
							</div>
						)
					}
				</div>
			</div>
		</section>
	);
};

export default MyOrders;