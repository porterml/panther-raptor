import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					{/* Logo Section */}
					<div className="footer-section footer-logo">
						<Image
							src="/assets/logo.svg"
							alt="Salt Flats Psychiatry Logo"
							width={100}
							height={100}
						/>
						<h3>Salt Flats Psychiatry</h3>
						<p>Mental Health Services</p>
					</div>

					{/* Contact Information */}
					<div className="footer-section footer-contact">
						<h4>Contact Information</h4>
						<p>
							<strong>Address:</strong>
							<br />
							40A S Main St, Suite 3<br />
							Tooele, UT 84074
						</p>
						<p>
							<strong>Phone:</strong> (435) 264-7926
						</p>
						<p>
							<strong>Email:</strong> saltflatswellness@gmail.com
						</p>
					</div>

					{/* Useful Links */}
					<div className="footer-section footer-links">
						<h4>Quick Links</h4>
						<ul>
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/about">About Us</Link>
							</li>
							<li>
								<Link href="/services">Services</Link>
							</li>
							<li>
								<Link href="/contact">Contact</Link>
							</li>
							<li>
								<a
									href="https://saltflatswellness.intakeq.com/booking"
									target="_blank"
									rel="noopener noreferrer"
								>
									Book Appointment
								</a>
							</li>
						</ul>
					</div>

					{/* Social Media & Buttons */}
					<div className="footer-section footer-social">
						<h4>Connect With Us</h4>
						<div className="social-icons">
							<a href="#" title="Facebook">
								<i className="fab fa-facebook-f"></i>
							</a>
							<a
								href="https://www.instagram.com/saltflatspsychiatry/"
								title="Instagram"
							>
								<i className="fab fa-instagram"></i>
							</a>
							{/* <a href="#" title="LinkedIn">
								<i className="fab fa-linkedin-in"></i>
							</a>
							<a href="#" title="Twitter">
								<i className="fab fa-twitter"></i>
							</a> */}
						</div>
						<div className="footer-buttons">
							<a href="#" className="footer-btn">
								Patient Portal
							</a>
							<a
								href="https://spruce.care/saltflatswellness"
								target="_blank"
								rel="noopener noreferrer"
								className="footer-btn"
							>
								Spruce
							</a>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="footer-copyright">
					<p>&copy; 2025 by Salt Flats Psychiatry. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
