import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutImage from "@/public/assets/img/about.jpg";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title:
		"About Renee Loveless | Psychiatric Nurse Practitioner | Salt Flats Wellness",
	description:
		"Meet Renee Loveless, MSN, APRN, PMHNP-BC, a compassionate Psychiatric Nurse Practitioner with 15+ years of ICU experience. Providing virtual & in-person mental health care in Tooele Valley, Utah.",
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
		"Salt Flats Wellness",
		"medication management",
		"virtual telehealth",
		"anxiety depression treatment",
		"ADHD evaluation",
		"PTSD treatment",
	],
	openGraph: {
		title:
			"About Renee Loveless | Psychiatric Nurse Practitioner | Salt Flats Wellness",
		description:
			"Meet Renee Loveless, MSN, APRN, PMHNP-BC, a compassionate Psychiatric Nurse Practitioner providing evidence-based mental health care in Tooele Valley, Utah.",
		url: "https://saltflatswellness.com/about",
		images: [
			{
				url: "/assets/img/about.jpg",
				width: 800,
				height: 600,
				alt: "Renee Loveless APRN, PMHNP-BC - Psychiatric Nurse Practitioner at Salt Flats Wellness",
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
		credential: "MSN, APRN, PMHNP-BC",
		alumniOf: {
			"@type": "CollegeOrUniversity",
			name: "Maryville University",
		},
		description:
			"Compassionate Psychiatric Nurse Practitioner providing evidence-based mental health care for adults and teens. Specializing in medication management, anxiety, depression, ADHD, and PTSD treatment.",
		worksFor: {
			"@type": "MedicalBusiness",
			name: "Salt Flats Wellness",
			address: {
				"@type": "PostalAddress",
				addressLocality: "Tooele Valley",
				addressRegion: "UT",
				addressCountry: "US",
			},
		},
		knowsAbout: [
			"Psychiatric Medication Management",
			"Anxiety and Depression Treatment",
			"ADHD/ADD Evaluation and Treatment",
			"PTSD and Trauma Treatment",
			"Cognitive Behavioral Therapy",
			"Dialectical Behavior Therapy",
			"Trauma-Informed Care",
			"Gottman Method Couples Therapy",
			"Sleep Disturbance Treatment",
			"Stress Management",
			"GLP-1 Medication Management",
			"Virtual Telehealth Services",
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
			{
				"@type": "PropertyValue",
				name: "Service Area",
				value: "Utah (Virtual) and Tooele Valley (In-Person)",
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
							alt="Renee Loveless, MSN, APRN, PMHNP-BC - Psychiatric Nurse Practitioner at Salt Flats Wellness"
							priority
						/>
						<div className="about-heading-content">
							<div className="row">
								<div className="col-xl-9 col-lg-10 mx-auto">
									<div className="bg-faded rounded p-5">
										<h1 className="section-heading mb-4">
											<span className="section-heading-upper">
												Renee Loveless, MSN, APRN, PMHNP-BC
											</span>
											<span className="section-heading-lower">
												Psychiatric Nurse Practitioner
											</span>
										</h1>
										<p className="lead">
											At Salt Flats Wellness, we provide compassionate,
											evidence-based psychiatric care for adults and teens who
											are ready to feel better and regain balance in their
											lives.
										</p>
										<p>
											With more than 15 years of ICU nursing experience and
											advanced training in psychiatric medication management, I
											understand how physical and mental health are deeply
											connected. I specialize in treating conditions such as
											anxiety, depression, and mood disorders; ADHD/ADD
											(including adult evaluations); PTSD and trauma-related
											concerns; sleep disturbances and stress management; and
											support through life transitions.
										</p>
										<p>
											Treatment at Salt Flats Wellness is personalized. I use a
											holistic approach that may include careful psychiatric
											assessment, medication management (including newer options
											such as GLP-1 medications for weight-related concerns,
											when appropriate), therapy integration (CBT, DBT,
											trauma-informed care, Gottman method for couples, etc.),
											and collaboration with your primary care provider or
											therapist.
										</p>

										{/* Specializations & Treatment Methods */}
										<div className="mt-4">
											<div className="row">
												<div className="col-md-6">
													<h4>Specializations Include:</h4>
													<ul className="list-unstyled">
														<li>• Anxiety, depression, and mood disorders</li>
														<li>• ADHD/ADD (including adult evaluations)</li>
														<li>• PTSD and trauma-related concerns</li>
														<li>• Sleep disturbances and stress management</li>
														<li>• Support through life transitions</li>
													</ul>
												</div>
												<div className="col-md-6">
													<h4>Treatment Methods:</h4>
													<ul className="list-unstyled">
														<li>• Psychiatric assessment and evaluation</li>
														<li>• Medication management</li>
														<li>• CBT, DBT, and trauma-informed care</li>
														<li>• Gottman method for couples</li>
														<li>• Collaboration with healthcare providers</li>
													</ul>
												</div>
											</div>
										</div>

										<p>
											As a military spouse for 25 years, I've supported families
											through change, resilience, and stress. I know that asking
											for help is brave. My goal is to create a safe,
											approachable space where you feel understood—not judged.
										</p>
										<p>
											<strong>Based in Tooele Valley, Utah</strong> – Offering
											virtual telehealth sessions statewide and limited
											in-person appointments. Contact me to schedule a
											consultation and take your first step toward healing.
										</p>

										{/* Professional Background Subsection */}
										<div className="mt-5">
											<h2 className="section-heading mb-4">
												<span className="section-heading-upper">
													Professional Background
												</span>
												<span className="section-heading-lower">
													Education & Experience
												</span>
											</h2>
											<p>
												Renee Loveless is a board-certified Psychiatric Nurse
												Practitioner who brings a wealth of experience,
												compassion, and dedication to the mental health needs of
												her patients. She is committed to delivering
												patient-centered care that empowers individuals to find
												balance, resilience, and long-term wellness.
											</p>
											<p>
												Renee earned her Master of Science in Nursing (MSN) from
												Maryville University and is board-certified through the
												American Nurses Credentialing Center. Her clinical
												expertise is grounded in more than 15 years as an ICU
												Registered Nurse, followed by her role as an RN Case
												Management Director. These experiences have equipped her
												with a strong foundation in managing complex medical and
												psychiatric cases, advocating for patients, and
												collaborating with multidisciplinary healthcare teams.
											</p>
											<p>
												Her background as part of a military family for 25 years
												has shaped her understanding of the unique challenges
												faced by veterans, active-duty personnel, and their
												loved ones. This perspective instilled in her a deep
												respect for adaptability, service, and
												resilience—qualities that now define her practice.
											</p>
										</div>

										{/* Treatment Approach Subsection */}
										<div className="mt-5">
											<h2 className="section-heading mb-4">
												<span className="section-heading-upper">
													Treatment Approach
												</span>
												<span className="section-heading-lower">
													Comprehensive Care
												</span>
											</h2>
											<p>
												At Salt Flats Wellness, Renee works with adults and
												adolescents, providing comprehensive psychiatric
												evaluations, medication management, and therapy
												integration. She specializes in treating anxiety,
												depression, ADHD, PTSD, and mood disorders, always
												tailoring treatment plans to the individual.
											</p>
											<p>
												Her approach blends evidence-based practice with a
												holistic view of mental health, ensuring patients
												receive both medical expertise and compassionate
												support. Renee's mission is to create a safe, welcoming
												environment where patients feel heard, supported, and
												empowered to take meaningful steps toward healing and
												well-being.
											</p>
										</div>

										{/* Service Area Subsection */}
										<div className="mt-5 text-center">
											<div className="mt-4">
												<a href="/contact" className="btn btn-primary btn-lg">
													Schedule a Consultation
												</a>
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
