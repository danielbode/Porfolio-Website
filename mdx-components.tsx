import type { MDXComponents } from "mdx/types";

/**
 * Provides custom MDX component overrides for Next.js MDX integration.
 * Extend this to customise how markdown elements are rendered across the site.
 */
export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
  ...components,
});
