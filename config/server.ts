export default ({ env }) => ({
  host: "0.0.0.0",
  port: env.int("PORT", 1337),
  url: env("PUBLIC_URL", "https://news-aggregator-cms.onrender.com"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
  },
});
