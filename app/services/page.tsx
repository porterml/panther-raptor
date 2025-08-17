import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import products01 from "../../assets/img/products-01.jpg";
import products02 from "../../assets/img/products-02.jpg";
import products03 from "../../assets/img/products-03.jpg";

export default function Services() {
	return (
		<>
			<Header />

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
							alt="Medication Management"
						/>
						<div className="product-item-description d-flex me-auto">
							<div className="bg-faded p-5 rounded">
								<p>
									Medication – This involves the use of medications to manage
									symptoms and improve the quality of life for patients with
									psychiatric conditions and requires careful assessment, dosage
									adjustments, and monitoring for side effects to ensure optimal
									therapeutic outcomes.
								</p>
								<p>
									Education – Providing education to patients and their families
									about the psychiatric condition, treatment options, and
									lifestyle factors, empowers patients with knowledge about
									their condition, promotes medication adherence and helps them
									recognize early signs of relapse.
								</p>
								<p className="mb-0">
									Monitoring and Follow-up – Regular follow-up appointments and
									assessments are essential to monitor the effectiveness of
									treatment, manage side effects, and make adjustments as
									needed. This can include evaluating symptom progression, lab
									work to check medication levels or metabolic effects, and
									coordinating with other healthcare providers for a
									comprehensive approach to care.
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
							alt="Counseling Services"
						/>
						<div className="product-item-description d-flex ms-auto">
							<div className="bg-faded p-5 rounded">
								<p>
									Cognitive Behavioral Therapy (CBT) – CBT is a widely used,
									evidence-based therapy that focuses on identifying and
									modifying negative thought patterns and behaviors and coping
									with stressors. It is effective for a variety of psychiatric
									conditions, including depression, anxiety disorders, insomnia
									and PTSD.
								</p>
								<p>
									Dialectical Behavior Therapy (DBT) – DBT combines
									cognitive-behavioral techniques with mindfulness practices to
									help individuals regulate emotions, build healthy
									relationships, and tolerate distress. These skills are
									effective for conditions like mood disorders, personality
									disorders, eating disorders, and PTSD.
								</p>
								<p className="mb-0">
									Psychodynamic Therapy – This approach explores the unconscious
									mind and underlying emotional conflicts, often rooted in early
									experiences. By bringing these conflicts into conscious
									awareness, patients gain insight into their behaviors and
									emotions, and is particularly helpful for those dealing with
									personality disorders, complex trauma, or longstanding
									emotional issues.
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
										From Around the World
									</span>
									<span className="section-heading-lower">
										Innovative Treatments
									</span>
								</h2>
							</div>
						</div>
						<Image
							className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
							src={products03}
							alt="Innovative Treatments"
						/>
						<div className="product-item-description d-flex me-auto">
							<div className="bg-faded p-5 rounded">
								<p>
									Weight Loss - Innovative weight loss treatments go beyond
									traditional diet and exercise, focusing on personalized
									approaches tailored to each patient's metabolic,
									psychological, and lifestyle needs. Options include
									medications such as GLP-1 receptor agonists (e.g.,
									semaglutide), which help regulate appetite and blood sugar
									levels, making it easier for individuals to lose weight
									sustainably. Other interventions may include nutritional
									counseling, and behavioral therapy to address emotional eating
									and promote long-term lifestyle changes. By combining medical,
									nutritional, and psychological support, these treatments offer
									a comprehensive approach to weight loss and health
									improvement.
								</p>
								<p className="mb-0"></p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
