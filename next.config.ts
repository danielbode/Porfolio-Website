import type { NextConfig } from "next";
import createMDX from "@next/mdx";

/**
 * rehype-pretty-code is intentionally not wired into the Turbopack dev loader
 * because Turbopack cannot serialise function references in loader options.
 * Add it back here (rehypePlugins: [[rehypePrettyCode, options]]) only for
 * production/webpack builds once MDX content exists in the project.
 */
const withMDX = createMDX({});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default withMDX(nextConfig);
