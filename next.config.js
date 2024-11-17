// next.config.js
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// Sentry options
const sentryWebpackPluginOptions = {
  silent: true,
  org: "jsm-x9", // Replace with your Sentry organization
  project: "javascript-nextjs", // Replace with your Sentry project
};

// Additional options for the Sentry integration
const sentryConfigOptions = {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions, sentryConfigOptions);
