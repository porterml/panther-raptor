import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import products01 from "../../assets/img/products-01.jpg";
import products02 from "../../assets/img/products-02.jpg";
import products03 from "../../assets/img/products-03.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title:
		"Mental Health Services & Treatments | Salt Flats Psychiatry Tooele, UT",
	description:
		"Comprehensive mental health services including psychiatric medication management, individual therapy, family counseling, CBT, DBT, and innovative weight loss treatments in Tooele, Utah.",
	keywords: [
		"mental health services Tooele",
		"psychiatric medication management",
		"individual therapy",
		"family counseling",
		"cognitive behavioral therapy",
		"dialectical behavior therapy",
		"psychodynamic therapy",
		"weight loss treatment",
		"anxiety therapy",
		"depression treatment",
		"PTSD therapy",
		"mental health treatments Utah",
	],
	openGraph: {
		title:
			"Mental Health Services & Treatments | Salt Flats Psychiatry Tooele, UT",
		description:
			"Comprehensive mental health services including psychiatric medication management, therapy, and innovative treatments in Tooele, Utah.",
		url: "https://saltflatswellness.com/services",
		images: [
			{
				url: "/assets/img/products-01.jpg",
				width: 800,
				height: 600,
				alt: "Psychiatric Medication Management Services",
			},
		],
	},
};

export default function Services() {
	const servicesStructuredData = {
		"@context": "https://schema.org",
		"@type": "MedicalBusiness",
		name: "Salt Flats Psychiatry",
		description: "Comprehensive mental health services and treatments",
		url: "https://saltflatswellness.com/services",
		medicalSpecialty: "Psychiatry",
		availableService: [
			{
				"@type": "MedicalTherapy",
				name: "Psychiatric Medication Management",
				description:
					"Comprehensive medication management for psychiatric conditions including assessment, dosage adjustments, and monitoring for side effects.",
				category: "Medication Management",
			},
			{
				"@type": "MedicalTherapy",
				name: "Individual Therapy",
				description:
					"One-on-one counseling sessions using evidence-based approaches like CBT, DBT, and psychodynamic therapy.",
				category: "Psychotherapy",
			},
			{
				"@type": "MedicalTherapy",
				name: "Family Counseling",
				description:
					"Family therapy sessions to improve relationships and communication within families.",
				category: "Family Therapy",
			},
			{
				"@type": "MedicalTherapy",
				name: "Weight Loss Treatment",
				description:
					"Innovative weight loss treatments including GLP-1 receptor agonists and comprehensive lifestyle support.",
				category: "Weight Management",
			},
		],
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Mental Health Services",
			itemListElement: [
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "MedicalTherapy",
						name: "Cognitive Behavioral Therapy (CBT)",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "MedicalTherapy",
						name: "Dialectical Behavior Therapy (DBT)",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "MedicalTherapy",
						name: "Psychodynamic Therapy",
					},
				},
			],
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(servicesStructuredData),
				}}
			/>

			<Header />

			<main>
				<section className="page-section">
					<div className="container">
						<div className="product-item">
							<div className="product-item-title d-flex">
								<div className="bg-faded p-5 d-flex ms-auto rounded">
									<h2 className="section-heading mb-0">
										<span className="section-heading-upper">
											Diagnoses Available
										</span>
										<span className="section-heading-lower">
											Medication Management
										</span>
									</h2>
								</div>
							</div>
							<Image
								className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
								src={products01}
								alt="Psychiatric Medication Management Services - Salt Flats Psychiatry"
								width={600}
								height={400}
							/>
							<div className="product-item-description d-flex me-auto">
								<div className="bg-faded p-5 rounded">
									<h3>Comprehensive Medication Management</h3>
									<p>
										<strong>Medication</strong> – This involves the use of
										medications to manage symptoms and improve the quality of
										life for patients with psychiatric conditions and requires
										careful assessment, dosage adjustments, and monitoring for
										side effects to ensure optimal therapeutic outcomes.
									</p>
									<p>
										<strong>Education</strong> – Providing education to patients
										and their families about the psychiatric condition,
										treatment options, and lifestyle factors, empowers patients
										with knowledge about their condition, promotes medication
										adherence and helps them recognize early signs of relapse.
									</p>
									<p className="mb-0">
										<strong>Monitoring and Follow-up</strong> – Regular
										follow-up appointments and assessments are essential to
										monitor the effectiveness of treatment, manage side effects,
										and make adjustments as needed. This can include evaluating
										symptom progression, lab work to check medication levels or
										metabolic effects, and coordinating with other healthcare
										providers for a comprehensive approach to care.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="page-section">
					<div className="container">
						<div className="product-item">
							<div className="product-item-title d-flex">
								<div className="bg-faded p-5 d-flex me-auto rounded">
									<h2 className="section-heading mb-0">
										<span className="section-heading-upper">
											Individual, Couples, and Family
										</span>
										<span className="section-heading-lower">
											Counseling Services
										</span>
									</h2>
								</div>
							</div>
							<Image
								className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
								src={products02}
								alt="Individual, Couples, and Family Counseling Services - Salt Flats Psychiatry"
								width={600}
								height={400}
							/>
							<div className="product-item-description d-flex ms-auto">
								<div className="bg-faded p-5 rounded">
									<h3>Evidence-Based Therapeutic Approaches</h3>
									<p>
										<strong>Cognitive Behavioral Therapy (CBT)</strong> – CBT is
										a widely used, evidence-based therapy that focuses on
										identifying and modifying negative thought patterns and
										behaviors and coping with stressors. It is effective for a
										variety of psychiatric conditions, including depression,
										anxiety disorders, insomnia and PTSD.
									</p>
									<p>
										<strong>Dialectical Behavior Therapy (DBT)</strong> – DBT
										combines cognitive-behavioral techniques with mindfulness
										practices to help individuals regulate emotions, build
										healthy relationships, and tolerate distress. These skills
										are effective for conditions like mood disorders,
										personality disorders, eating disorders, and PTSD.
									</p>
									<p className="mb-0">
										<strong>Psychodynamic Therapy</strong> – This approach
										explores the unconscious mind and underlying emotional
										conflicts, often rooted in early experiences. By bringing
										these conflicts into conscious awareness, patients gain
										insight into their behaviors and emotions, and is
										particularly helpful for those dealing with personality
										disorders, complex trauma, or longstanding emotional issues.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="page-section">
					<div className="container">
						<div className="product-item">
							<div className="product-item-title d-flex">
								<div className="bg-faded p-5 d-flex ms-auto rounded">
									<h2 className="section-heading mb-0">
										<span className="section-heading-upper">
											Innovative Treatment Options
										</span>
										<span className="section-heading-lower">
											Weight Loss & Wellness
										</span>
									</h2>
								</div>
							</div>
							<Image
								className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
								src={products03}
								alt="Innovative Weight Loss and Wellness Treatments - Salt Flats Psychiatry"
								width={600}
								height={400}
							/>
							<div className="product-item-description d-flex me-auto">
								<div className="bg-faded p-5 rounded">
									<h3>Advanced Weight Loss Solutions</h3>
									<p>
										<strong>Innovative Weight Loss Treatments</strong> go beyond
										traditional diet and exercise, focusing on personalized
										approaches tailored to each patient's metabolic,
										psychological, and lifestyle needs. Options include
										medications such as GLP-1 receptor agonists (e.g.,
										semaglutide), which help regulate appetite and blood sugar
										levels, making it easier for individuals to lose weight
										sustainably.
									</p>
									<p className="mb-0">
										Other interventions may include nutritional counseling, and
										behavioral therapy to address emotional eating and promote
										long-term lifestyle changes. By combining medical,
										nutritional, and psychological support, these treatments
										offer a comprehensive approach to weight loss and health
										improvement.
									</p>
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
