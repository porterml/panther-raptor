import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "Salt Flats Wellness - Mental Health Services | Tooele, UT",
		template: "%s | Salt Flats Wellness",
	},
	description:
		"Compassionate, patient-centered mental health care in Tooele, Utah. Psychiatric medication management, therapy, and innovative treatments for lasting wellness.",
	keywords: [
		"mental health services",
		"psychiatric care",
		"therapy Tooele",
		"medication management",
		"psychiatric nurse practitioner",
		"mental health Tooele Utah",
		"anxiety treatment",
		"depression therapy",
		"PTSD treatment",
		"weight loss treatment",
		"family counseling",
		"individual therapy",
	],
	authors: [{ name: "Renee Loveless APRN, PMHNP-BC" }],
	creator: "Salt Flats Wellness",
	publisher: "Salt Flats Wellness",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://saltflatswellness.com"),
	alternates: {
		canonical: "/",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://saltflatswellness.com",
		title: "Salt Flats Wellness - Mental Health Services | Tooele, UT",
		description:
			"Compassionate, patient-centered mental health care in Tooele, Utah. Psychiatric medication management, therapy, and innovative treatments for lasting wellness.",
		siteName: "Salt Flats Wellness",
		images: [
			{
				url: "/assets/img/intro.jpg",
				width: 1200,
				height: 630,
				alt: "Salt Flats Wellness - Mental Health Services",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Salt Flats Wellness - Mental Health Services | Tooele, UT",
		description:
			"Compassionate, patient-centered mental health care in Tooele, Utah.",
		images: ["/assets/img/intro.jpg"],
	},
	verification: {
		google: "your-google-verification-code", // Add your Google Search Console verification code
	},
	category: "healthcare",
	classification: "mental health services",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/assets/favicon.ico"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/favicon.ico"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/assets/favicon.ico"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<meta name="theme-color" content="#ffffff" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<link
					href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
			</head>
			<body className={inter.className}>
				{children}
				<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
			</body>
		</html>
	);
}
