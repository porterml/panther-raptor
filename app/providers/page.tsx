import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutImage from "@/public/assets/img/About.png";
import aboutImage2 from "@/public/assets/img/SaltFlatsPsych-55.jpg";
import emmaImage from "@/public/assets/img/providers/emma-west.jpg";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Our Providers",
	description:
		"Meet the providers at Salt Flats Psychiatry: Renee Loveless, MSN, APRN, PMHNP-BC, and Emma West, DNP, FNP-BC. Providing virtual & in-person mental health care in Tooele Valley, Utah.",
	keywords: [
		"Renee Loveless",
		"Emma West",
		"family nurse practitioner",
		"psychiatric nurse practitioner",
		"PMHNP-BC",
		"mental health provider Tooele",
		"psychiatric care Utah",
		"APRN mental health",
		"Maryville University",
		"military family mental health",
		"veteran mental health services",
		"Salt Flats Psychiatry",
		"medication management",
		"virtual telehealth",
		"anxiety depression treatment",
		"ADHD evaluation",
		"PTSD treatment",
		"psychiatric nurse practitioner Tooele",
		"mental health professional Utah",
		"psychiatric care provider Tooele",
		"mental health specialist Utah",
		"psychiatric services Tooele",
		"mental health treatment Utah",
		"psychiatric evaluation Tooele",
		"mental health assessment Utah",
		"psychiatric consultation Tooele",
		"mental health therapy Utah",
		"psychiatric treatment Tooele",
		"mental health counseling Utah",
		"psychiatric services Utah",
		"mental health support Tooele",
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
		"bipolar disorder treatment",
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
	],
	alternates: {
		canonical: "/providers",
	},
	openGraph: {
		title: "Our Providers | Salt Flats Psychiatry",
		description:
			"Meet the providers at Salt Flats Psychiatry: Renee Loveless, MSN, APRN, PMHNP-BC, and Emma West, DNP, FNP-BC. Evidence-based mental health care in Tooele Valley, Utah.",
		url: "https://saltflatspsychiatry.com/providers",
		images: [
			{
				url: "/assets/img/About.png",
				width: 800,
				height: 600,
				alt: "Renee Loveless APRN, PMHNP-BC - Psychiatric Nurse Practitioner at Salt Flats Psychiatry",
			},
		],
	},
};

export default function Providers() {
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
			name: "Salt Flats Psychiatry",
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

	const emmaStructuredData = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Emma West",
		jobTitle: "Family Nurse Practitioner",
		hasCredential: "DNP, FNP-BC",
		alumniOf: [
			{ "@type": "CollegeOrUniversity", name: "Rocky Mountain University" },
			{ "@type": "CollegeOrUniversity", name: "Dixie State University" },
			{ "@type": "CollegeOrUniversity", name: "University of Utah" },
		],
		worksFor: {
			"@type": "MedicalBusiness",
			name: "Salt Flats Psychiatry",
			address: {
				"@type": "PostalAddress",
				addressLocality: "Tooele Valley",
				addressRegion: "UT",
				addressCountry: "US",
			},
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(providerStructuredData),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(emmaStructuredData),
				}}
			/>

			<Header />

			<main>
				{/* Intro */}
				<section className="page-section provider-intro">
					<div className="container">
						<div className="row">
							<div className="col-xl-9 col-lg-10 mx-auto">
								<div className="bg-faded rounded p-4 p-md-5 text-center">
									<h1 className="section-heading mb-3">
										<span className="section-heading-upper">
											Salt Flats Psychiatry
										</span>
										<span className="section-heading-lower">
											Our Providers
										</span>
									</h1>
									<p className="lead mb-4">
										Compassionate, evidence-based care for adults and teens,
										with virtual telehealth statewide and in-person
										appointments in Tooele Valley, Utah.
									</p>
									<div className="row justify-content-center g-3">
										<div className="col-6 col-md-4">
											<a className="provider-jump" href="#renee-loveless">
												<span className="provider-jump-photo">
													<Image
														src={aboutImage2}
														alt=""
														fill
														sizes="120px"
														style={{ objectPosition: "66% 25%" }}
													/>
												</span>
												<strong>Renee Loveless</strong>
												<small>Psychiatric Nurse Practitioner</small>
											</a>
										</div>
										<div className="col-6 col-md-4">
											<a className="provider-jump" href="#emma-west">
												<span className="provider-jump-photo">
													<Image
														src={emmaImage}
														alt=""
														fill
														sizes="120px"
														style={{ objectPosition: "50% 15%" }}
													/>
												</span>
												<strong>Emma West</strong>
												<small>Family Nurse Practitioner</small>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Renee Loveless */}
				<section id="renee-loveless" className="provider-section">
					<div className="container">
						<div className="row">
							<div className="col-xl-9 col-lg-10 mx-auto">
								<article className="bg-faded rounded p-4 p-md-5">
									<div className="row g-4 align-items-center">
										<div className="col-md-5">
											<div className="provider-photo">
												<Image
													src={aboutImage2}
													alt="Renee Loveless, MSN, APRN, PMHNP-BC - Psychiatric Nurse Practitioner at Salt Flats Psychiatry"
													fill
													sizes="(min-width: 992px) 340px, (min-width: 768px) 40vw, 100vw"
													style={{ objectPosition: "66% 30%" }}
													priority
												/>
											</div>
										</div>
										<div className="col-md-7">
											<h2 className="section-heading mb-3">
												<span className="section-heading-upper">
													Renee Loveless, MSN, APRN, PMHNP-BC
												</span>
												<span className="section-heading-lower">
													Psychiatric Nurse Practitioner
												</span>
											</h2>
											<p className="lead mb-0">
												At Salt Flats Psychiatry, we provide compassionate,
												evidence-based psychiatric care for adults and teens who
												are ready to feel better and regain balance in their
												lives.
											</p>
										</div>
									</div>

									<h3 className="provider-subheading">About Renee</h3>
									<p>
										With more than 15 years of ICU nursing experience and
										advanced training in psychiatric medication management, I
										understand how physical and mental health are deeply
										connected. I specialize in treating conditions such as
										anxiety, depression, and mood disorders; ADHD/ADD (including
										adult evaluations); PTSD and trauma-related concerns; sleep
										disturbances and stress management; and support through life
										transitions.
									</p>
									<p>
										Treatment at Salt Flats Psychiatry is personalized. I use a
										holistic approach that may include careful psychiatric
										assessment, medication management (including newer options
										such as GLP-1 medications for weight-related concerns, when
										appropriate), therapy integration (CBT, DBT, trauma-informed
										care, Gottman method for couples, etc.), and collaboration
										with your primary care provider or therapist.
									</p>
									<p>
										As a military spouse for 25 years, I&apos;ve supported
										families through change, resilience, and stress. I know that
										asking for help is brave. My goal is to create a safe,
										approachable space where you feel understood—not judged.
									</p>

									<div className="row g-3 my-4">
										<div className="col-md-6">
											<div className="provider-list-box">
												<h4>Specializations</h4>
												<ul className="provider-list">
													<li>Anxiety, depression, and mood disorders</li>
													<li>ADHD/ADD (including adult evaluations)</li>
													<li>PTSD and trauma-related concerns</li>
													<li>Sleep disturbances and stress management</li>
													<li>Support through life transitions</li>
												</ul>
											</div>
										</div>
										<div className="col-md-6">
											<div className="provider-list-box">
												<h4>Treatment Methods</h4>
												<ul className="provider-list">
													<li>Psychiatric assessment and evaluation</li>
													<li>Medication management</li>
													<li>CBT, DBT, and trauma-informed care</li>
													<li>Gottman method for couples</li>
													<li>Collaboration with healthcare providers</li>
												</ul>
											</div>
										</div>
									</div>

									<h3 className="provider-subheading">Professional Background</h3>
									<p>
										Renee Loveless is a board-certified Psychiatric Nurse
										Practitioner who brings a wealth of experience, compassion,
										and dedication to the mental health needs of her patients.
										She is committed to delivering patient-centered care that
										empowers individuals to find balance, resilience, and
										long-term wellness.
									</p>
									<p>
										Renee earned her Master of Science in Nursing (MSN) from
										Maryville University and is board-certified through the
										American Nurses Credentialing Center. Her clinical expertise
										is grounded in more than 15 years as an ICU Registered
										Nurse, followed by her role as an RN Case Management
										Director. These experiences have equipped her with a strong
										foundation in managing complex medical and psychiatric
										cases, advocating for patients, and collaborating with
										multidisciplinary healthcare teams.
									</p>
									<p>
										Her background as part of a military family for 25 years has
										shaped her understanding of the unique challenges faced by
										veterans, active-duty personnel, and their loved ones. This
										perspective instilled in her a deep respect for
										adaptability, service, and resilience—qualities that now
										define her practice.
									</p>

									<h3 className="provider-subheading">Treatment Approach</h3>
									<p>
										At Salt Flats Psychiatry, Renee works with adults and
										adolescents, providing comprehensive psychiatric
										evaluations, medication management, and therapy integration.
										She specializes in treating anxiety, depression, ADHD, PTSD,
										and mood disorders, always tailoring treatment plans to the
										individual.
									</p>
									<p>
										Her approach blends evidence-based practice with a holistic
										view of mental health, ensuring patients receive both
										medical expertise and compassionate support. Renee&apos;s
										mission is to create a safe, welcoming environment where
										patients feel heard, supported, and empowered to take
										meaningful steps toward healing and well-being.
									</p>

									<div className="provider-cta">
										<p className="mb-3">
											<strong>Based in Tooele Valley, Utah</strong> – Offering
											virtual telehealth sessions statewide and limited
											in-person appointments.
										</p>
										<a href="/contact" className="btn btn-primary btn-lg">
											Schedule with Renee
										</a>
									</div>
								</article>
							</div>
						</div>
					</div>
				</section>

				{/* Emma West */}
				<section id="emma-west" className="provider-section">
					<div className="container">
						<div className="row">
							<div className="col-xl-9 col-lg-10 mx-auto">
								<article className="bg-faded rounded p-4 p-md-5">
									<div className="row g-4 align-items-center">
										<div className="col-md-5">
											<div className="provider-photo">
												<Image
													src={emmaImage}
													alt="Emma West, DNP, FNP-BC - Family Nurse Practitioner at Salt Flats Psychiatry"
													fill
													sizes="(min-width: 992px) 340px, (min-width: 768px) 40vw, 100vw"
													style={{ objectPosition: "50% 20%" }}
													placeholder="blur"
												/>
											</div>
										</div>
										<div className="col-md-7">
											<h2 className="section-heading mb-3">
												<span className="section-heading-upper">
													Emma West, DNP, FNP-BC
												</span>
												<span className="section-heading-lower">
													Family Nurse Practitioner
												</span>
											</h2>
											<p className="lead mb-0">
												Emma West is a board-certified Family Nurse Practitioner
												with a Doctor of Nursing Practice degree and a background
												in both primary care and behavioral health.
											</p>
										</div>
									</div>

									<h3 className="provider-subheading">About Emma</h3>
									<p>
										Before becoming a nurse practitioner, Emma spent years as a
										registered nurse caring for people with psychiatric and
										medical needs. She worked on the behavioral health unit at
										St. Mark&apos;s Hospital, served as a charge nurse
										coordinating care for patients living with depression,
										bipolar disorder, anxiety, and schizophrenia, and worked as a
										home health and hospice case manager. As a nurse
										practitioner, she has provided home-based primary care,
										palliative care, and wellness visits for homebound patients.
									</p>
									<p>
										Emma&apos;s clinical training covers family medicine,
										pediatrics, and psychiatry. In her psychiatric rotations she
										completed hundreds of new patient assessments for children,
										teens, and adults, provided medication management and
										psychotherapy, and helped deliver treatments for major
										depression such as Spravato and transcranial magnetic
										stimulation (TMS).
									</p>

									<div className="row g-3 my-4">
										<div className="col-md-6">
											<div className="provider-list-box">
												<h4>Education &amp; Credentials</h4>
												<ul className="provider-list">
													<li>
														Doctor of Nursing Practice, Family Nurse Practitioner
														– Rocky Mountain University
													</li>
													<li>
														B.S. in Nursing, High Honors – Dixie State University
													</li>
													<li>B.S. in Public Health – University of Utah</li>
													<li>Board certified (ANCC), FNP-BC</li>
												</ul>
											</div>
										</div>
										<div className="col-md-6">
											<div className="provider-list-box">
												<h4>Experience Includes</h4>
												<ul className="provider-list">
													<li>Inpatient behavioral health nursing</li>
													<li>Psychiatric assessment and medication management</li>
													<li>Primary care for all ages</li>
													<li>Home health, palliative, and hospice care</li>
													<li>Patient and family education</li>
												</ul>
											</div>
										</div>
									</div>

									<h3 className="provider-subheading">Research &amp; Community</h3>
									<p>
										Emma&apos;s doctoral project focused on reducing burnout
										among healthcare staff through mindfulness-based
										interventions. Outside the clinic, she has organized an
										annual mental wellness fair and volunteers in her community,
										including at the Salt Lake City downtown mission.
									</p>

									<div className="provider-cta">
										<a href="/contact" className="btn btn-primary btn-lg">
											Schedule with Emma
										</a>
									</div>
								</article>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
