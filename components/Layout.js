import React from 'react';
import Head from 'next/head';
import '../styles/common.css';

/**
 * Common application layout
 */
export default function Layout({title, topSection, children}) {
  return <div className="app">
    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"/>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css"
        rel="stylesheet"/>

      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      <title>{title}</title>
    </Head>
    <h1>{title}</h1>
    {topSection
      ? <div className="app_topSection">{topSection}</div>
      : null}
    {children}
    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
        <script src="path/to/your/bundle.js"></script>
  </div>;
}