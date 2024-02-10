import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Scintilla-Network: Protocol and Usage Documentation</span>,
  project: {
    link: 'https://scintilla.network',
  },
  chat: {
    link: 'https://discord.gg/3kPvEWNrXE',
  },
  docsRepositoryBase: 'https://github.com/Scintilla-Network/docs.scintilla.network',
  footer: {
    text: 'Scintilla Network Documentation',
  },
  head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Scintilla-Network: Protocol and Usage Documentation" />
        <meta name="og:title" content="Scintilla-Network: Protocol and Usage Documentation" />
        <meta property="og:suffix" content="- Scintilla-Network" />
      </>
  ),
  useNextSeoProps: () => ({ titleTemplate: '%s – Scintilla-Network' }),
}

export default config
