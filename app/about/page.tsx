import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutImage from "@/public/assets/img/about.jpg";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Renee Loveless | Psychiatric Nurse Practitioner Tooele, UT",
	description:
		"Meet Renee Loveless APRN, PMHNP-BC, a dedicated Psychiatric Nurse Practitioner with 15+ years of ICU experience and 25 years as a military family member. Expert mental health care in Tooele, Utah.",
	keywords: [
		"Renee Loveless",
		"psychiatric nurse practitioner",
		"PMHNP-BC",
		"mental health provider Tooele",
		"psychiatric care Utah",
		"APRN mental health",
		"Maryville University",
		"military family mental health",
		"veteran mental health services",
	],
	openGraph: {
		title: "About Renee Loveless | Psychiatric Nurse Practitioner Tooele, UT",
		description:
			"Meet Renee Loveless APRN, PMHNP-BC, a dedicated Psychiatric Nurse Practitioner with extensive experience in mental health care.",
		url: "https://saltflatswellness.com/about",
		images: [
			{
				url: "/assets/img/about.jpg",
				width: 800,
				height: 600,
				alt: "Renee Loveless APRN, PMHNP-BC - Psychiatric Nurse Practitioner",
			},
		],
	},
};

export default function About() {
	const providerStructuredData = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Renee Loveless",
		jobTitle: "Psychiatric Nurse Practitioner",
		credential: "APRN, PMHNP-BC",
		alumniOf: {
			"@type": "CollegeOrUniversity",
			name: "Maryville University",
		},
		description:
			"Dedicated Psychiatric Nurse Practitioner serving mental health needs with a passion for providing compassionate, patient-centered care.",
		worksFor: {
			"@type": "MedicalBusiness",
			name: "Salt Flats Psychiatry",
			address: {
				"@type": "PostalAddress",
				streetAddress: "40A S Main St, Suite 3",
				addressLocality: "Tooele",
				addressRegion: "UT",
				postalCode: "84074",
				addressCountry: "US",
			},
		},
		knowsAbout: [
			"Psychiatric Medication Management",
			"Individual Therapy",
			"Family Counseling",
			"Cognitive Behavioral Therapy",
			"Dialectical Behavior Therapy",
			"Psychodynamic Therapy",
			"Mental Health Assessment",
			"Patient Advocacy",
		],
		hasCredential: "PMHNP-BC",
		additionalProperty: [
			{
				"@type": "PropertyValue",
				name: "ICU Experience",
				value: "15 years",
			},
			{
				"@type": "PropertyValue",
				name: "Military Family Experience",
				value: "25 years",
			},
		],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(providerStructuredData),
				}}
			/>

			<Header />

			<main>
				<section className="page-section about-heading">
					<div className="container">
						<Image
							className="rounded about-heading-img mb-3 mb-lg-0"
							height={500}
							src={aboutImage}
							alt="Renee Loveless APRN, PMHNP-BC - Psychiatric Nurse Practitioner in Tooele, Utah"
							priority
						/>
						<div className="about-heading-content">
							<div className="row">
								<div className="col-xl-9 col-lg-10 mx-auto">
									<div className="bg-faded rounded p-5">
										<h1 className="section-heading mb-4">
											<span className="section-heading-upper">
												Renee Loveless APRN, PMHNP-BC
											</span>
											<span className="section-heading-lower">
												Meet our Provider
											</span>
										</h1>
										<p>
											Renee Loveless is a dedicated Psychiatric Nurse
											Practitioner serving mental health needs with a passion
											for providing compassionate, patient-centered care.
										</p>
										<p className="">
											She holds an MSN from Maryville University and is
											board-certified through the American Nurses Association.
											With a background as an RN in the ICU for 15 years and
											additional experience as an RN Case Management Director,
											she has honed her ability to manage complex cases,
											advocate for patient needs, and coordinate effectively
											with physicians, nurses, and allied health professionals.
										</p>
										<p className="mb-0">
											Having spent 25 years as part of a military family, Renee
											understands the unique challenges and resilience required
											in the face of change and uncertainty. This experience has
											given her a deep appreciation for adaptability and a
											strong commitment to service, which she brings to each
											patient interaction. Whether working with veterans,
											active-duty personnel or civilians, Renee is committed to
											empowering patients with the tools and knowledge they need
											to achieve long-term wellness and mental resilience in
											their everyday lives.
										</p>
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
