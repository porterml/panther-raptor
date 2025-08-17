import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Header />

			<section className="page-section clearfix">
				<div className="container">
					<div className="intro">
						<Image
							className="intro-img img-fluid mb-3 mb-lg-0 rounded"
							src="/assets/img/intro.jpg"
							alt="Salt Flats Wellness Introduction"
							width={600}
							height={400}
							priority
						/>
						<div className="intro-text left-0 text-center bg-faded p-4 rounded">
							<h2 className="section-heading mb-4">
								<span className="section-heading-upper">Welcome to</span>
								<span
									className="section-heading-lower"
									style={{ textTransform: "capitalize" }}
								>
									Salt Flats Wellness
								</span>
							</h2>
							<p className="mb-3">
								We are dedicated to providing compassionate, patient-centered
								mental health care, empowering you to achieve lasting
								well-being.
							</p>
							<p>Your journey to a healthier, balanced life begins here.</p>
							<div className="intro-button mx-auto">
								<a
									className="btn btn-primary btn-xl"
									href="https://saltflatswellness.intakeq.com/booking"
									target="_blank"
									rel="noopener noreferrer"
								>
									Set an Appointment
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="page-section cta">
				<div className="container">
					<div className="row">
						<div className="col-xl-9 mx-auto">
							<div className="cta-inner bg-faded text-center rounded">
								<h2 className="section-heading mb-4">
									<span className="section-heading-upper">Our Promise</span>
									<span className="section-heading-lower">To You</span>
								</h2>
								<p className="mb-0">
									We are dedicated to providing compassionate, patient-centered
									mental health care, empowering you to achieve lasting
									well-being. Our mission is threefold:
								</p>
								<ol>
									<li>
										Support and Healing – We strive to create a safe, welcoming
										environment where every individual feels understood and
										supported.
									</li>
									<li>
										Holistic, Evidence-Based Care – Through therapy, medication
										management, and innovative treatments, we offer a
										comprehensive approach tailored to your unique needs.
									</li>
									<li>
										Accessible Mental Wellness – We are committed to expanding
										access to quality mental health care in our community,
										promoting wellness and resilience for all.
									</li>
								</ol>
								<p>Your journey to a healthier, balanced life begins here.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
