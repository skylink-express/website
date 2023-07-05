import React from 'react';
import { Helmet } from "react-helmet"
// import {Global, css} from '@emotion/react'

import "./reset.css"
import "./layout.css"

// NOTE: this does not seem to update
// when the file changes in dev, needs dev server 
// restart
export default function Layout({children}) {
  return (
    <main>
      <Helmet>
        <title>SkyLink - Unbreakable global wireless crypto communication</title>
      </Helmet>
      {children}
    </main>

  )
}
