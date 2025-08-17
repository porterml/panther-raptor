/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "intakeq.com",
				port: "",
				pathname: "/images/**",
			},
		],
	},
};

module.exports = nextConfig;
