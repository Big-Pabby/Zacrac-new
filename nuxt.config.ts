// https://nuxt.com/docs/api/configuration/nuxt-config
import axios from "axios";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Akure, Data science, market research, survey, nigeria",
      htmlAttrs: { lang: "en" },

      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Data science, market research and survey platform in Nigeria",
        },

        // ✅ SEO Improvements
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Zacrac" },
        { property: "og:url", content: "https://www.zacrac.com" },

        { name: "twitter:card", content: "summary_large_image" },

        {
          name: "google-site-verification",
          content: "qbqZMZmtcd4vb0z2H0_Ve1B_LVUknuWpADGq___DPSQ",
        },
      ],

      link: [
        { rel: "icon", href: "/favicon.png" },
        { rel: "canonical", href: "https://www.zacrac.com/" },
      ],

      script: [
        {
          src: "https://assets.calendly.com/assets/external/widget.js",
          defer: true,
        },
        {
          src: "https://www.googletagmanager.com/gtm.js?id=GTM-5TVJ3P3",
          async: true,
        },

        {
          src: "https://connect.facebook.net/en_US/fbevents.js",
          defer: true,
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
  css: ["~/assets/css/main.css", "~/assets/css/header.css"],
  ssr: true,
  plugins: [],

  site: {
    url: "https://www.zacrac.com",
  },

  robots: {
    allow: "/",
    disallow: ["/admin", "/admins"],
  },

  sitemap: {
    urls: async () => {
      try {
        const response = await axios.get("https://parrotapi.parrot.cx/blog");
        const posts =
          response.data?.data?.docs || response.data?.data?.blogs || [];
        return posts.map((post: any) => ({
          loc: `/blog/${post.category}/${post.slug || post._id}`,
        }));
      } catch (error) {
        console.error("Error fetching blog posts for sitemap:", error);
        return [];
      }
    },
  },
  nitro: {
    preset: "node-server",

    prerender: {
      routes: ["/"],
      crawlLinks: false, // disable crawl to prevent dynamic route prerendering
    },
  },

  routeRules: {
    // SSR for dynamic routes - don't prerender
    "/blog/**": { swr: 3600 }, // Vercel ISR: revalidate every hour
  },
});
