import Header from "../components/Header";
import Footer from "../components/Footer";
import InsuranceChecker from "../components/InsuranceChecker";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Accepted Insurance Plans | Salt Flats Psychiatry Tooele, UT",
	description:
		"Check if your insurance is accepted at Salt Flats Psychiatry. We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and more.",
	keywords: [
		"insurance accepted",
		"insurance coverage",
		"accepted insurance plans",
		"Blue Cross Blue Shield",
		"Aetna",
		"Cigna",
		"UnitedHealthcare",
		"mental health insurance",
		"psychiatric care insurance",
		"therapy insurance coverage",
		"insurance verification",
		"mental health services insurance",
		"psychiatric services insurance",
		"insurance plans Tooele",
		"mental health insurance Utah",
		"psychiatric care insurance Tooele",
		"therapy insurance Tooele",
		"insurance coverage Utah",
		"accepted insurance Tooele",
		"mental health provider insurance",
		"psychiatric nurse practitioner insurance",
		"insurance accepted Tooele Utah",
		"mental health insurance Tooele Utah",
		"psychiatric care insurance Tooele Utah",
		"therapy insurance Tooele Utah",
		"insurance coverage Tooele Utah",
	],
	openGraph: {
		title: "Accepted Insurance Plans | Salt Flats Psychiatry Tooele, UT",
		description:
			"Check if your insurance is accepted at Salt Flats Psychiatry. We accept most major insurance plans for mental health services.",
		url: "https://saltflatspsychiatry.com/insurance",
	},
};

export default function Insurance() {
	const insuranceStructuredData = {
		"@context": "https://schema.org",
		"@type": "MedicalBusiness",
		name: "Salt Flats Psychiatry",
		description: "Mental health services accepting most major insurance plans",
		url: "https://saltflatspsychiatry.com/insurance",
		medicalSpecialty: "Psychiatry",
		paymentAccepted: [
			"Insurance",
			"Blue Cross Blue Shield",
			"Aetna",
			"Cigna",
			"UnitedHealthcare",
			"Self-Pay",
		],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(insuranceStructuredData),
				}}
			/>

			<Header />

			<main>
				<section className="page-section cta">
					<div className="container">
						<div className="row">
							<div className="col-xl-9 mx-auto">
								<div className="cta-inner bg-faded rounded">
									<h1 className="section-heading mb-4">
										<span className="section-heading-upper">
											Insurance Coverage
										</span>
										<span className="section-heading-lower">
											Accepted Insurance Plans
										</span>
									</h1>

									<p className="lead mb-4">
										We accept most major insurance plans to make mental health
										care accessible. Use the search below to quickly check if
										your insurance is covered, or browse our complete list of
										accepted insurance providers.
									</p>

									<InsuranceChecker />

									<div className="mt-5">
										<h2 className="section-heading mb-4">
											<span className="section-heading-upper">
												Important Information
											</span>
											<span className="section-heading-lower">
												About Insurance Coverage
											</span>
										</h2>

										<div className="row">
											<div className="col-md-6">
												<h3>Verification</h3>
												<p>
													While we accept many insurance plans, coverage can
													vary based on your specific plan and benefits. We
													recommend contacting your insurance provider to verify
													your coverage before your first appointment.
												</p>
											</div>
											<div className="col-md-6">
												<h3>Self-Pay Options</h3>
												<p>
													If your insurance is not accepted or you prefer to pay
													out-of-pocket, we offer competitive self-pay rates.
													Please contact us to discuss payment options and any
													available discounts.
												</p>
											</div>
										</div>

										<div className="mt-4">
											<h3>Questions About Coverage?</h3>
											<p>
												If you have questions about your insurance coverage or
												need help verifying your benefits, please don't hesitate
												to contact us. Our team is here to help you navigate the
												insurance process.
											</p>
											<a
												className="btn btn-primary btn-xl"
												href="/contact"
												aria-label="Contact Salt Flats Psychiatry about insurance coverage"
											>
												Contact Us
											</a>
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
