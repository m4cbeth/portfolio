import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    // configure page extentions for MDX
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    // any other config for next goes here
};

const withMDX = createMDX({
    // add markdown plugins here, as desired
})

// Merge MDX config with Next config

export default withMDX(nextConfig);
