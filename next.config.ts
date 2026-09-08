import type { NextConfig } from 'next';

const githubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  env: { NEXT_PUBLIC_BASE_PATH: githubPages ? '/PersonaHate' : '' },
  ...(githubPages
    ? {
        output: 'export',
        basePath: '/PersonaHate',
        // An absolute prefix keeps Vinext's output in _next/static while
        // serving it from the repository's GitHub Pages subdirectory.
        assetPrefix: 'https://trustairlab.github.io/PersonaHate',
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
