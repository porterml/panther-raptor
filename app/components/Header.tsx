"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<>
			<header>
				<h1
					className="site-heading text-center text-faded d-none d-lg-block"
					style={{ textTransform: "none" }}
				>
					<span
						className="site-heading-lower fw-semibold "
						style={{
							fontFamily:
								"Playlist Script, Dancing Script, Brush Script MT, Lucida Handwriting, cursive",
							textTransform: "none",
						}}
					>
						Salt Flats Psychiatry
					</span>
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
							<li className="nav-item">
								<a
									className="btn btn-primary btn-xl"
									href="https://saltflatswellness.intakeq.com/booking"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Book an appointment with Salt Flats Psychiatry"
								>
									Book Now
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
