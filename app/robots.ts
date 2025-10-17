import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/private/", "/admin/", "/api/", "/_next/", "/static/"],
			},
			{
				userAgent: "Googlebot",
				allow: "/",
				disallow: ["/private/", "/admin/", "/api/"],
			},
			{
				userAgent: "Bingbot",
				allow: "/",
				disallow: ["/private/", "/admin/", "/api/"],
			},
		],
		sitemap: "https://saltflatspsychiatry.com/sitemap.xml",
		host: "https://saltflatspsychiatry.com",
	};
}
