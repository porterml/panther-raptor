import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Mental Health Services | Psychiatric Care Tooele, UT",
	description:
		"Professional mental health services in Tooele, Utah. Psychiatric medication management, individual therapy, family counseling, and innovative treatments for anxiety, depression, PTSD, and more.",
	keywords: [
		"mental health Tooele",
		"psychiatric care Utah",
		"therapy services",
		"medication management",
		"anxiety treatment",
		"depression therapy",
		"PTSD treatment",
		"family counseling",
		"individual therapy",
		"psychiatric nurse practitioner",
		"psychiatrist Tooele",
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
		title: "Mental Health Services | Psychiatric Care Tooele, UT",
		description:
			"Professional mental health services in Tooele, Utah. Psychiatric medication management, individual therapy, family counseling, and innovative treatments.",
		url: "https://saltflatspsychiatry.com",
		images: [
			{
				url: "/assets/img/intro.jpg",
				width: 1200,
				height: 630,
				alt: "Salt Flats Psychiatry Mental Health Services",
			},
		],
	},
};

export default function Home() {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "MedicalBusiness",
		name: "Salt Flats Psychiatry",
		description:
			"Compassionate, patient-centered mental health care providing psychiatric medication management, therapy, and innovative treatments.",
		url: "https://saltflatspsychiatry.com",
		telephone: "+1-435-264-7926",
		email: "hello@saltflatspsychiatry.com",
		address: {
			"@type": "PostalAddress",
			streetAddress: "40A S Main St, Suite 3",
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
		openingHours: "Mo-Fr 09:00-17:00",
		medicalSpecialty: "Psychiatry",
		availableService: [
			{
				"@type": "MedicalTherapy",
				name: "Psychiatric Medication Management",
				description:
					"Comprehensive medication management for psychiatric conditions",
			},
			{
				"@type": "MedicalTherapy",
				name: "Individual Therapy",
				description:
					"One-on-one counseling sessions for mental health concerns",
			},
			{
				"@type": "MedicalTherapy",
				name: "Family Counseling",
				description:
					"Family therapy sessions to improve relationships and communication",
			},
		],
		healthcareProvider: {
			"@type": "Person",
			name: "Renee Loveless",
			jobTitle: "Psychiatric Nurse Practitioner",
			credential: "APRN, PMHNP-BC",
			alumniOf: "Maryville University",
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>

			<Header />

			<main>
				<section className="page-section clearfix">
					<div className="container">
						<div className="intro">
							<Image
								className="intro-img img-fluid mb-3 mb-lg-0 rounded"
								src="/assets/img/intro.jpg"
								alt="Salt Flats Psychiatry Introduction - Mental Health Services in Tooele, Utah"
								width={600}
								height={400}
								priority
							/>
							<div className="intro-text left-0 text-center bg-faded p-4 rounded">
								<div className="section-heading mb-4">
									<Image
										src="/assets/img/BIGLOGO.png"
										alt="Salt Flats Psychiatry Logo"
										width={400}
										height={120}
										priority
										className="img-fluid"
									/>
								</div>
								<p className="mb-3">
									Specializing in comprehensive treatment for{" "}
									<strong>ADHD</strong>, <strong>Anxiety</strong>, and{" "}
									<strong>Depression</strong> with personalized care tailored to
									your unique needs.
								</p>
								<p className="mb-0">
									Your journey to a healthier, balanced life begins here.
								</p>
								<div className="intro-button mx-auto">
									<a
										className="btn btn-primary btn-xl"
										href="https://saltflatswellness.intakeq.com/booking"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Book an appointment with Salt Flats Psychiatry"
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
										Supporting you through OCD, anxiety, depression, ADHD, and
										PTSD with understanding, connection, and personalized care .
										Our mission is threefold:
									</p>
									<ol>
										<li>
											<strong>Support and Healing</strong> – We strive to create
											a safe, welcoming environment where every individual feels
											understood and supported.
										</li>
										<li>
											<strong>Holistic, Evidence-Based Care</strong> – Through
											therapy, medication management, and innovative treatments,
											we offer a comprehensive approach tailored to your unique
											needs.
										</li>
										<li>
											<strong>Accessible Mental Wellness</strong> – We are
											committed to expanding access to quality mental health
											care in our community, promoting wellness and resilience
											for all.
										</li>
									</ol>
									<p>Your journey to a healthier, balanced life begins here.</p>
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
