/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://nathanielk.dev",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
