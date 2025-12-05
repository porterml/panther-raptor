import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Salt Flats Psychiatry | Mental Health Services Tooele, UT",
	description:
		"Contact Salt Flats Psychiatry for mental health services in Tooele, Utah. Located at 2321 N 400 E, Suite 200. Call (435) 264-7926 or book online. Office hours: Mon-Fri 9AM-5PM.",
	keywords: [
		"contact Salt Flats Psychiatry",
		"mental health Tooele Utah",
		"psychiatric care contact",
		"therapy appointment Tooele",
		"mental health services Utah",
		"psychiatric nurse practitioner contact",
		"book mental health appointment",
		"mental health clinic Tooele",
		"psychiatric care Tooele",
		"mental health clinic Utah",
		"psychiatric evaluation",
		"bipolar disorder treatment",
		"ADHD treatment",
		"trauma therapy",
		"cognitive behavioral therapy",
		"dialectical behavior therapy",
		"psychiatric medication",
		"mental wellness",
		"psychiatric services",
		"mental health provider",
		"psychiatric assessment",
		"mental health counseling",
		"psychiatric consultation",
		"mental health support",
		"psychiatric treatment",
		"mental health care",
		"psychiatric therapy",
		"mental health professional",
		"psychiatric nurse",
		"mental health specialist",
		"psychiatric care provider",
		"mental health practitioner",
		"psychiatric services Utah",
		"mental health treatment Tooele",
		"psychiatric care Tooele",
		"mental health services Utah",
		"psychiatric evaluation Tooele",
		"mental health assessment",
		"psychiatric diagnosis",
		"mental health evaluation",
		"psychiatric consultation Tooele",
		"mental health therapy Utah",
		"psychiatric treatment Utah",
		"mental health counseling Tooele",
		"psychiatric services Tooele",
		"mental health support Utah",
		"psychiatric care provider Utah",
		"mental health specialist Tooele",
		"psychiatric nurse practitioner Utah",
		"mental health professional Tooele",
		"psychiatric therapy Utah",
		"mental health practitioner Tooele",
		"psychiatric services Tooele Utah",
		"mental health treatment Utah",
		"psychiatric care Tooele Utah",
		"mental health services Tooele Utah",
		"psychiatric evaluation Tooele Utah",
		"mental health assessment Utah",
		"psychiatric diagnosis Utah",
		"mental health evaluation Utah",
		"psychiatric consultation Tooele Utah",
		"mental health therapy Tooele Utah",
		"psychiatric treatment Tooele Utah",
		"mental health counseling Tooele Utah",
		"psychiatric services Tooele Utah",
		"mental health support Tooele Utah",
		"psychiatric care provider Tooele Utah",
		"mental health specialist Tooele Utah",
		"psychiatric nurse practitioner Tooele Utah",
		"mental health professional Tooele Utah",
		"psychiatric therapy Tooele Utah",
		"mental health practitioner Tooele Utah",
	],
	openGraph: {
		title: "Contact Salt Flats Psychiatry | Mental Health Services Tooele, UT",
		description:
			"Contact Salt Flats Psychiatry for mental health services in Tooele, Utah. Located at 2321 N 400 E, Suite 200. Call (435) 264-7926 or book online.",
		url: "https://saltflatspsychiatry.com/contact",
	},
};

export default function Contact() {
	const contactStructuredData = {
		"@context": "https://schema.org",
		"@type": "MedicalBusiness",
		name: "Salt Flats Psychiatry",
		description: "Mental health services and psychiatric care in Tooele, Utah",
		url: "https://saltflatspsychiatry.com",
		telephone: "+1-435-264-7926",
		email: "hello@saltflatspsychiatry.com",
		address: {
			"@type": "PostalAddress",
			streetAddress: "2321 N 400 E, Suite 200",
			addressLocality: "Tooele",
			addressRegion: "UT",
			postalCode: "84074",
			addressCountry: "US",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: "40.5302",
			longitude: "-112.2983",
		},
		openingHours: ["Mo-Fr 09:00-17:00", "Sa 09:00-17:00"],
		openingHoursSpecification: [
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
				opens: "09:00",
				closes: "17:00",
			},
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Saturday",
				opens: "09:00",
				closes: "17:00",
			},
		],
		contactPoint: {
			"@type": "ContactPoint",
			telephone: "+1-435-264-7926",
			contactType: "customer service",
			availableLanguage: "English",
			hoursAvailable: {
				"@type": "OpeningHoursSpecification",
				dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
				opens: "09:00",
				closes: "17:00",
			},
		},
		sameAs: ["https://saltflatswellness.intakeq.com/booking"],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(contactStructuredData),
				}}
			/>

			<Header />

			<main>
				<section className="page-section ct">
					<div className="container">
						<div className="row">
							<div className="col-xl-9 mx-auto">
								<div className="ct-inner bg-faded rounded">
									<h1 className="section-heading mb-4">
										<span className="section-heading-lower">Contact Us</span>
									</h1>

									<div className="row">
										<div className="col-lg-6">
											<h2>Get in Touch</h2>
											<p>
												We're here to help you on your journey to mental
												wellness. Please don't hesitate to reach out with any
												questions or to schedule an appointment.
											</p>

											<div className="contact-info">
												<h3>Contact Information</h3>
												<address>
													<p>
														<strong>Address:</strong>
														<br />
														<a
															href="https://maps.google.com/?q=2321+N+400+E,+Suite+200,+Tooele,+UT+84074"
															target="_blank"
															rel="noopener noreferrer"
															aria-label="View Salt Flats Psychiatry location on Google Maps"
														>
															2321 N 400 E, Suite 200
															<br />
															Tooele, UT 84074
														</a>
													</p>
													<p>
														<strong>Phone:</strong>{" "}
														<a
															href="tel:+1-435-264-7926"
															aria-label="Call Salt Flats Psychiatry at (435) 264-7926"
														>
															(435) 264-7926
														</a>
													</p>
													<p>
														<strong>Email:</strong>{" "}
														<a
															href="mailto:hello@saltflatspsychiatry.com"
															aria-label="Email Salt Flats Psychiatry at hello@saltflatspsychiatry.com"
														>
															hello@saltflatspsychiatry.com
														</a>
													</p>
												</address>
											</div>

											<div className="appointment-booking mt-4 mb-4">
												<h3>Book an Appointment</h3>
												<p>
													Ready to take the first step? Book your appointment
													online through our secure booking system.
												</p>
												<a
													className="btn btn-primary btn-xl"
													href="https://saltflatswellness.intakeq.com/booking"
													target="_blank"
													rel="noopener noreferrer"
													aria-label="Book an appointment with Salt Flats Psychiatry online"
												>
													Book Appointment
												</a>
											</div>
											<div className="mb-4">
												<Image
													src="/assets/img/SaltFlatsPsych-3.jpg"
													alt="Salt Flats Psychiatry -  Office Door"
													width={600}
													height={400}
													className="img-fluid rounded"
												/>
											</div>
										</div>

										<div className="col-lg-6">
											<div className="mb-4">
												<Image
													src="/assets/img/LetThem.jpg"
													alt="Let them - Decorative still life"
													width={600}
													height={400}
													className="img-fluid rounded"
												/>
											</div>
											<h2>Office Hours</h2>
											<div className="office-hours">
												<dl>
													<dt>
														<strong>Monday - Friday:</strong>
													</dt>
													<dd>10:00 AM - 5:00 PM</dd>

													<dt>
														<strong>Saturday & Sunday:</strong>
													</dt>
													<dd>Closed</dd>
												</dl>
											</div>

											<div className="emergency-info mt-4">
												<h3>Emergency Resources</h3>
												<p>
													If you're experiencing a mental health emergency,
													please call:
												</p>
												<ul>
													<li>
														<strong>
															National Suicide Prevention Lifeline:
														</strong>{" "}
														<a
															href="tel:988"
															aria-label="Call National Suicide Prevention Lifeline at 988"
														>
															988
														</a>
													</li>
													<li>
														<strong>Crisis Text Line:</strong> Text HOME to
														741741
													</li>
													<li>
														<strong>Emergency Services:</strong>{" "}
														<a
															href="tel:911"
															aria-label="Call Emergency Services at 911"
														>
															911
														</a>
													</li>
												</ul>
											</div>

											<div className="insurance-info mt-4">
												<h3>Insurance & Payment</h3>
												<p>
													We accept most major insurance plans and also offer
													self-pay options. Please contact us to verify your
													insurance coverage and discuss payment arrangements.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
