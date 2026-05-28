import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.lizerfornavajonation.com";

  const routes = [
    "",
    "/about",
    "/priorities",
    "/news",
    "/events",
    "/watch",
    "/get-involved",
    "/donate",
    "/contact",
    "/thank-you",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" || route === "/news" || route === "/events" || route === "/watch"
        ? "weekly"
        : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/priorities"
          ? 0.9
          : route === "/get-involved"
            ? 0.9
            : route === "/watch"
              ? 0.85
              : route === "/donate"
                ? 0.8
                : 0.7,
  }));
}