import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/Form.css";
import { useHistory, useLocation } from 'react-router';
import useAouth from '../../Hooks/useAouth';
import fb from "../../Images/Icon/facebook.png";
import google from "../../Images/Icon/google.png";

const SignUp = () => {
	const { handleSignUp, signInGoogle, signInFacebook, nameValue, emailValue, imageValue, passwordValue, error } = useAouth();
	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || "/home";
	const signInWithGoogle = () => {
		signInGoogle().then(() => {
			history.push(redirect_uri);
		});
	};
	const signInWithFacebook = () => {
		signInFacebook().then(() => {
			history.push(redirect_uri);
		});
	};
	return (
		<section className="pt-70 pb-70">
			<div className="container">
				<div className="mx-auto form-area">
					<div className="form border p-5 mb-4">
						<div className="mb-4">
							<h1 className="size-50 t-color-1e fw-bold mb-3">Sign <span className="t-color-ed">Up</span></h1>
						</div>
						<form onSubmit={handleSignUp}>
							<div class="mb-4">
								<input type="text" class="form-control" id="name" onChange={nameValue} placeholder="Full Name *" required />
							</div>
							<div class="mb-4">
								<input type="text" class="form-control" id="image" onChange={imageValue} placeholder="Image URL *" required />
							</div>
							<div class="mb-4">
								<input type="email" class="form-control" id="email" onChange={emailValue} placeholder="Your Email *" required />
							</div>
							<div class="mb-4">
								<input type="password" class="form-control" id="password" onChange={passwordValue} placeholder="Your Password *" required />
							</div>
							<div className="mb-4 t-color-ed">
								<p className="mb-3 t-color-ed">{error}</p>
								<input type="submit" value="Create An Account →" className="tran-2 hover fw-500 text-white bg-1e w-100 rounded" />
							</div>
						</form>
						<div className="">
							<p className="t-color-21 text-center">
								<span>Already have an account?</span>
								<Link to="/signIn" className="underline ms-2 t-color-21">Sign In</Link>
							</p>
						</div>
					</div>
					<div className="">
						<div className="line text-center mb-3">
							<span className="position-relative f-size-18">Or</span>
						</div>
						<div className="signin-icon">
							<button onClick={signInWithFacebook} className="mb-3 mx-auto d-table rounded-pill border d-flex align-items-center  justify-content-center p-2">
								<img src={fb} alt="fb" className="rounded-circle me-2" />
								<p className="t-color-21">Continue With Facebook</p>
							</button>
							<button onClick={signInWithGoogle} className="mx-auto d-table rounded-pill border d-flex align-items-center  justify-content-center p-2">
								<img src={google} alt="google" className="rounded-circle me-2" />
								<p className="t-color-21">Continue With Google</p>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp;