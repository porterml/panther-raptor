import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutImage from "@/public/assets/img/about.jpg";
import Image from "next/image";

export default function About() {
	return (
		<>
			<Header />

			<section className="page-section about-heading">
				<div className="container">
					<Image
						className="rounded about-heading-img mb-3 mb-lg-0"
						height={500}
						src={aboutImage}
						alt="Renee Loveless APRN, PMHNP-BC"
						priority
					/>
					<div className="about-heading-content">
						<div className="row">
							<div className="col-xl-9 col-lg-10 mx-auto">
								<div className="bg-faded rounded p-5">
									<h2 className="section-heading mb-4">
										<span className="section-heading-upper">
											Renee Loveless APRN, PMHNP-BC
										</span>
										<span className="section-heading-lower">
											Meet our Provider
										</span>
									</h2>
									<p>
										Renee Loveless is a dedicated Psychiatric Nurse Practitioner
										serving mental health needs with a passion for providing
										compassionate, patient-centered care.
									</p>
									<p className="">
										She holds an MSN from Maryville University and is
										board-certified through the American Nurses Association.
										With a background as an RN in the ICU for 15 years and
										additional experience as an RN Case Management Director, she
										has honed her ability to manage complex cases, advocate for
										patient needs, and coordinate effectively with physicians,
										nurses, and allied health professionals.
									</p>
									<p className="mb-0">
										Having spent 25 years as part of a military family, Renee
										understands the unique challenges and resilience required in
										the face of change and uncertainty. This experience has
										given her a deep appreciation for adaptability and a strong
										commitment to service, which she brings to each patient
										interaction. Whether working with veterans, active-duty
										personnel or civilians, Renee is committed to empowering
										patients with the tools and knowledge they need to achieve
										long-term wellness and mental resilience in their everyday
										lives.
									</p>
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
