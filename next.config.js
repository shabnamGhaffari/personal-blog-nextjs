/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: false,
  },
  env:{
    monodb_username:'shabnam',
    monodb_password:'SRJblT11IFe4sAp1',
  }
}

module.exports = nextConfig
