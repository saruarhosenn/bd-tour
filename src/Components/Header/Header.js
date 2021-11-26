import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css";
import logo from "../../Images/logo.png";
import useAouth from '../../Hooks/useAouth';

const Header = () => {
	const { user, logOut } = useAouth();
	return (
		<header className="bg-1e py-1">
			<nav className="container position-relative">
				<div class="navbar navbar-expand-xl navbar-light align-items-center">
					{/* Site Logo */}
					<div className="logo">
						<Link to="/home" className="fw-bold text-white size-18">
							<p className="mb-1">
								<img src={logo} alt="dental" />
							</p>
							<p>BD TOUR</p>
						</Link>
					</div>

					{/* Mobail Menu Toggle BTN */}
					<div className="menu-icon d-blobk d-xl-none" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="bg-ed d-block"></span>
						<span className="bg-ed d-block my-2"></span>
						<span className="bg-ed d-block"></span>
					</div>

					{/* NavBar */}
					<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
						<ul class="navbar-nav align-items-xl-center main-menu">
							<li class="nav-item mb-1 mb-xl-0">
								<NavLink to="/home" className="text-center tran-2 d-block d-xl-inline-block menu-link bg-ed text-white px-3 py-2">Home</NavLink>
							</li>
							<li class="nav-item mb-1 mb-xl-0 ms-xl-2">
								<NavLink to="/packages" className="text-center tran-2 d-block d-xl-inline-block menu-link bg-ed text-white px-3 py-2">Packages</NavLink>
							</li>
							{
								user?.email && 
								<li class="nav-item mb-1 mb-xl-0 ms-xl-2">
									<NavLink to="/myOrders" className="text-center tran-2 d-block d-xl-inline-block menu-link bg-ed text-white px-3 py-2">My Orders</NavLink>
								</li>
							}
							{
								user?.email && 
								<li class="nav-item mb-1 mb-xl-0 ms-xl-2">
									<NavLink to="/allOrders" className="text-center tran-2 d-block d-xl-inline-block menu-link bg-ed text-white px-3 py-2">All Orders</NavLink>
								</li>
							}
							<li class="nav-item mb-1 mb-xl-0 ms-xl-2">
								<NavLink to="/addPackage" className="text-center tran-2 d-block d-xl-inline-block menu-link bg-ed text-white px-3 py-2">Add Package</NavLink>
							</li>
							<li class="nav-item mb-1 mb-xl-0 ms-xl-2">
								<NavLink to="/contact" className="text-center tran-2 d-block d-xl-inline-block menu-link bg-ed text-white px-3 py-2">Contact</NavLink>
							</li>

							{/* Sign Sign Out */}
							{
								!user?.email ? 
									<li class="nav-item mb-1 mb-xl-0 ms-xl-2">
										<NavLink to="/signIn" className="text-center tran-2 d-block d-xl-inline-block menu-link bg-ed text-white px-3 py-2">Sign In</NavLink>
									</li>
								:
									<div className="log-out nav-iem d-xl-flex align-items-xl-center ms-xl-2">
										<button onClick={logOut} className="tran-2 d-block menu-link bg-ed text-white px-3 py-2">Log Out</button>
										<div className="user mt-3 mt-xl-0 ms-xl-4">
											<div className="user-img text-center mb-2">
												<img src={user?.photoURL} alt="" className="rounded-circle" />
											</div>
											<div className="user-info text-center">
												<h4 className="size-16 text-white fw-bold">{user?.displayName}</h4>
											</div>
										</div>
									</div>
							}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;