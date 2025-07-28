import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md',  'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true, // command next config to include all assets in the build phase
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.mdx?$/,
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
