import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import "../../css/Form.css";
import divider from "../../Images/divider.png";

const AddPackage = () => {
	const { register, handleSubmit, reset } = useForm();
  	const onSubmit = data => {
		console.log(data);
		fetch("http://localhost:5000/packages", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		})
		.then();
		reset("");
	};
	return (
		<section className="pt-70 pb-70">
			<div className="container">
				<div className="text-center mb-5">
					<h1 className="size-50 t-color-1e fw-bold">Add New <span className="t-color-ed">Package</span></h1>
					<img src={divider} alt="divider" />
				</div>
				<div className="form-area mx-auto">
					<form className="form border p-5 mb-4" onSubmit={handleSubmit(onSubmit)}>
						<input type="text" placeholder="Image URL" className="form-control mb-4" {...register("image")} required />
						<input type="text" placeholder="Package Title" className="form-control mb-4" {...register("title")} required />
						<input type="text" placeholder="Location" className="form-control mb-4" {...register("location")} required />
						<input type="text" placeholder="Description" className="form-control mb-4" {...register("Description")} required />
						<input type="text" placeholder="Price" className="form-control mb-4" {...register("price")} required />
						<input type="text" placeholder="Place Description" className="form-control mb-4" {...register("PlaceDescription")} required />
						<input type="text" placeholder="Package Details PDF URL" className="form-control mb-4" {...register("pdf")} required />
						<input type="submit" value="Add New Package →" className="tran-2 hover fw-500 text-white bg-1e w-100 rounded" />
					</form>
					<div className="">
						<p className="mb-4">If you can't add service, that means you don't understand how to add service. Then you can take ideas from our previously added services on the Packages page.</p>
						<Link to="/packages" className="tran-2 hover py-13 fw-500 text-white bg-1e px-30 rounded-pill">Previous Packages →</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AddPackage;