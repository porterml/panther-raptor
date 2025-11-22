"use client";

import { useState, useMemo } from "react";

// List of accepted insurance plans
const ACCEPTED_INSURANCES = [
	"Aetna",
	"Bluecard",
	"Cigna",
	"Deseret Mutual Benefit Advisors",
	"DMBA",
	"Direct Care Administrators",
	"EMI Health",
	"FEP",
	"Humana",
	"Magellan",
	"Medicare",
	"Molina",
	"Motiv Health",
	"Multiplan",
	"PEHP",
	"Regence",
	"Regence Blue Cross Blue",
	"Select Health",
	"SelectHealth",
	"TriWest/Tricare",
	"U of U",
	"UBH/Optum (not Medicaid)",
	"UHC",
	"UMR",
	"United Medical Resources",
	"United Medical Resources (UMR)",
	"University of Utah Health Plans",
];

export default function InsuranceChecker() {
	const [searchTerm, setSearchTerm] = useState("");

	// Filter insurances based on search term
	const filteredInsurances = useMemo(() => {
		if (!searchTerm.trim()) {
			return ACCEPTED_INSURANCES;
		}

		const searchLower = searchTerm.toLowerCase();
		return ACCEPTED_INSURANCES.filter((insurance) =>
			insurance.toLowerCase().includes(searchLower)
		);
	}, [searchTerm]);

	// Check if search term matches any insurance (for display message)
	const isExactMatch = useMemo(() => {
		if (!searchTerm.trim()) return null;
		const searchLower = searchTerm.toLowerCase();
		return ACCEPTED_INSURANCES.some(
			(insurance) => insurance.toLowerCase() === searchLower
		);
	}, [searchTerm]);

	const hasResults = filteredInsurances.length > 0;
	const showMessage = searchTerm.trim().length > 0;

	return (
		<div className="insurance-checker">
			<div className="mb-4">
				<label htmlFor="insurance-search" className="form-label h4">
					Search for Your Insurance Provider
				</label>
				<input
					type="text"
					className="form-control form-control-lg"
					id="insurance-search"
					placeholder="Type your insurance name (e.g., Blue Cross, Aetna, Cigna)..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					aria-label="Search for insurance provider"
				/>
			</div>

			{showMessage && (
				<div
					className={`alert ${
						isExactMatch
							? "alert-success"
							: hasResults
							? "alert-info"
							: "alert-warning"
					} mb-4`}
					role="alert"
				>
					{isExactMatch ? (
						<>
							<strong>
								<i className="fas fa-check-circle me-2"></i>Great news!
							</strong>
							<br />
							We accept <strong>{searchTerm}</strong>. Please contact us to
							verify your specific plan details and coverage.
						</>
					) : hasResults ? (
						<>
							<strong>
								<i className="fas fa-info-circle me-2"></i>Found similar plans:
							</strong>
							<br />
							We may accept your insurance. Check the results below or contact
							us to verify your specific plan.
						</>
					) : (
						<>
							<strong>
								<i className="fas fa-exclamation-triangle me-2"></i>Not found in
								our list:
							</strong>
							<br />
							We don't see <strong>{searchTerm}</strong> in our accepted
							insurance list, but this doesn't mean we don't accept it. Please
							contact us to verify your coverage, or check our complete list
							below.
						</>
					)}
				</div>
			)}

			<div className="insurance-results">
				{!showMessage && (
					<h3 className="mb-3">
						<i className="fas fa-list me-2"></i>All Accepted Insurance Plans
					</h3>
				)}

				{hasResults ? (
					<div className="row">
						{filteredInsurances.map((insurance, index) => (
							<div key={index} className="col-md-6 col-lg-4 mb-3">
								<div className="card h-100">
									<div className="card-body">
										<h5 className="card-title mb-0">
											<i className="fas fa-check-circle text-success me-2"></i>
											{insurance}
										</h5>
									</div>
								</div>
							</div>
						))}
					</div>
				) : showMessage ? (
					<div className="alert alert-secondary">
						<p className="mb-2">
							<strong>No matching results found.</strong>
						</p>
						<p className="mb-0">
							Please try a different search term, or contact us directly to
							verify if we accept your insurance plan.
						</p>
					</div>
				) : null}
			</div>

			{showMessage && hasResults && (
				<div className="mt-3">
					<button
						className="btn btn-outline-secondary"
						onClick={() => setSearchTerm("")}
						aria-label="Clear search and show all insurance plans"
					>
						<i className="fas fa-times me-2"></i>Clear Search
					</button>
				</div>
			)}
		</div>
	);
}
