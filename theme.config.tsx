import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Animetize Documentaion</span>,
  useNextSeoProps: () => {
    return { titleTemplate: `%s | Animetize` };
  },
  faviconGlyph: "🈸",
  project: {
    link: "https://github.com/animetize",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/animetize/animetize-docs/blob/main",
  footer: {
    text: "© 2024-2025 Animetize.",
  },
  head: function useHead() {
    const description =
      "The documentation for gogoanime provider on the animetize-api. Find out how to efficiently use the Animetize API here!";
    return (
      <>
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
      </>
    );
  },
};

export default config
