import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
	return (
		<>
			<Header />

			<section className="page-section cta">
				<div className="container">
					<div className="row">
						<div className="col-xl-9 mx-auto">
							<div className="cta-inner bg-faded rounded">
								<h2 className="section-heading mb-4">
									<span className="section-heading-upper">Contact</span>
									<span className="section-heading-lower">Us</span>
								</h2>

								<div className="row">
									<div className="col-lg-6">
										<h4>Get in Touch</h4>
										<p>
											We're here to help you on your journey to mental wellness.
											Please don't hesitate to reach out with any questions or
											to schedule an appointment.
										</p>

										<div className="contact-info">
											<h5>Contact Information</h5>
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

										<div className="appointment-booking mt-4">
											<h5>Book an Appointment</h5>
											<p>
												Ready to take the first step? Book your appointment
												online through our secure booking system.
											</p>
											<a
												className="btn btn-primary"
												href="https://saltflatswellness.intakeq.com/booking"
												target="_blank"
												rel="noopener noreferrer"
											>
												Book Appointment
											</a>
										</div>
									</div>

									<div className="col-lg-6">
										<h4>Office Hours</h4>
										<div className="office-hours">
											<p>
												<strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM
											</p>
											<p>
												<strong>Saturday:</strong> By appointment only
											</p>
											<p>
												<strong>Sunday:</strong> Closed
											</p>
										</div>

										<div className="emergency-info mt-4">
											<h5>Emergency Resources</h5>
											<p>
												If you're experiencing a mental health emergency, please
												call:
											</p>
											<ul>
												<li>
													<strong>National Suicide Prevention Lifeline:</strong>{" "}
													988
												</li>
												<li>
													<strong>Crisis Text Line:</strong> Text HOME to 741741
												</li>
												<li>
													<strong>Emergency Services:</strong> 911
												</li>
											</ul>
										</div>

										<div className="insurance-info mt-4">
											<h5>Insurance & Payment</h5>
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

			<Footer />
		</>
	);
}
