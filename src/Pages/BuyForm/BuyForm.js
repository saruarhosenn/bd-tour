import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import "../../css/Form.css";
import useAouth from '../../Hooks/useAouth';

const BuyForm = () => {

	const {user} = useAouth();
	const { id } = useParams();
	const [packagePrice, setPackagePrice] = useState([]);
	const [personData, setPersonData] = useState(1);
	const [daysData, setDaysData] = useState(1);
	const [price, setPrice] = useState({});

	useEffect(() => {
		fetch("http://localhost:5000/packages")
			.then(res => res.json())
			.then(data => setPackagePrice(data))
	}, []);
	useEffect(() => {
		const data = packagePrice.find(price => price._id === id);
		setPrice(data);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [packagePrice]);
	
	const handlePerson1 = () => {
		setPersonData(personData + 1);
	};
	const handlePerson2 = () => {
		const personValue = document.getElementById("person").value;
		if (personValue > 1) {
			setPersonData(personData - 1);
		};
		console.log(personValue);
	};

	const handleDays1 = () => {
		setDaysData(daysData + 1);
	};
	const handleDays2 = () => {
		const daysValue = document.getElementById("days").value;
		if (daysValue > 1) {
			setDaysData(daysData - 1);
		};
	};

	const total = (price, personData, daysData) => {
		return personData * price?.price * daysData;
	};
	const totalPrice = total(price, personData, daysData);
	const perHeadPrice = totalPrice / personData;

	const dateRef = useRef("");
	const phoneRef = useRef("");
	const personRef = useRef("");
	const daysRef = useRef("");
  	const onSubmit = event => {
		const date = dateRef.current.value;
		const phone = phoneRef.current.value;
		const person = personRef.current.value;
		const days = daysRef.current.value;
		const travellersData = {date, phone, person, days};
		const travellers = {...price, ...travellersData};
		travellers.email = user.email;
		travellers.name = user.displayName;
		travellers.price = totalPrice;
		// travellers.status = "Pending";
		fetch("http://localhost:5000/orderpackages", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(travellers)
		})
		.then()
		.then();
		event.preventDefault();
		event.target.reset();
	};
	return (
		<section className="pt-70 pb-70">
			<div className="container">
				<div className="row g-4">
					<div className="col-lg-7">
						{/* Form */}
						<div className="form border p-5">
							<div className="mb-4">
								<h1 className="size-40 t-color-1e fw-bold">Travellers <span className="t-color-ed">Information</span></h1>
							</div>
							<form onSubmit={onSubmit}>
								<div className="mb-4">
									<label htmlFor="" className="mb-2">Booking Date</label>
									<input type="date" className="form-control" ref={dateRef} required />
								</div>
								<div className="mb-4">
									<label htmlFor="" className="mb-2">Phone Number</label>
									<input type="tel" className="form-control" ref={phoneRef} required />
								</div>
								<div className="mb-4">
									<label htmlFor="" className="mb-2">Person</label>
									<div className="d-flex">
										<input type="text" value={personData} ref={personRef} id="person" className="form-control me-2" required />
										<button type="button" onClick={handlePerson2} className="tran-2 hover fw-500 text-white bg-1e px-4 px-sm-5 me-2"><i class="fas fa-minus"></i></button>
										<button type="button" onClick={handlePerson1} className="tran-2 hover fw-500 text-white bg-1e px-4 px-sm-5"><i class="fas fa-plus"></i></button>
									</div>
								</div>
								<div className="mb-4">
									<label htmlFor="" className="mb-2">Days</label>
									<div className="d-flex">
										<input type="text" value={daysData} ref={daysRef} id="days" className="form-control me-2" required />
										<button type="button" onClick={handleDays2} className="tran-2 hover fw-500 text-white bg-1e px-4 px-sm-5 me-2"><i class="fas fa-minus"></i></button>
										<button type="button" onClick={handleDays1} className="tran-2 hover fw-500 text-white bg-1e px-4 px-sm-5"><i class="fas fa-plus"></i></button>
									</div>
								</div>
								<input type="submit" value="Save & Continue →" className="tran-2 hover fw-500 text-white bg-1e w-100 rounded" />
							</form>
						</div>
					</div>

					{/* Price Cart */}
					<div className="col-lg-5">
						<div className="form border p-5">
							<h3 className="size-30 t-color-1e fw-bold mb-4">Price <span className="t-color-ed">Details</span></h3>
							<div className="">
								<h5 className="mb-3">Total Travellers: {personData}</h5>
								<h5 className="mb-3">Total Days: {daysData}</h5>
								<h5 className="mb-3">Per Head Price BDT: {perHeadPrice}</h5>
								<h5 className="">Total Price BDT: {totalPrice}</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BuyForm;