import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Disable automatic AGENTS.md modification by Next.js to preserve the project's synced AGENTS.md file
  agentRules: false,
};

export default nextConfig;
