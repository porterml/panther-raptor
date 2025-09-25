"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<>
			<header>
				<h1 className="site-heading text-center text-faded d-none d-lg-block">
					<span className="site-heading-lower">Salt Flats Psychiatry</span>
				</h1>
			</header>

			<nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
				<div className="container">
					<Link
						className="navbar-brand text-uppercase fw-bold d-lg-none"
						href="/"
					>
						Salt Flats Psychiatry
					</Link>

					<button
						className="navbar-toggler"
						type="button"
						onClick={() => setIsNavOpen(!isNavOpen)}
						aria-controls="navbarSupportedContent"
						aria-expanded={isNavOpen}
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav mx-auto">
							<li className="nav-item px-lg-4">
								<Link className="nav-link text-uppercase" href="/">
									Home
								</Link>
							</li>
							<li className="nav-item px-lg-4">
								<Link className="nav-link text-uppercase" href="/about">
									About
								</Link>
							</li>
							<li className="nav-item px-lg-4">
								<Link className="nav-link text-uppercase" href="/services">
									Services
								</Link>
							</li>
							<li className="nav-item px-lg-4">
								<Link className="nav-link text-uppercase" href="/contact">
									Contact Us
								</Link>
							</li>
							<li className="">
								<a
									href="https://saltflatswellness.intakeq.com/booking"
									target="_blank"
									rel="noopener noreferrer"
									title="Make an Online Appointment"
								>
									<img
										style={{ height: "45px", width: "162px" }}
										height="45"
										width="162"
										src="https://intakeq.com/images/booknow.png"
										alt="Book Now"
									/>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
