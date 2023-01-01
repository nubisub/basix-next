import React from 'react'
import Header from '../header'
import Head from 'next/head'

interface LayoutProps {
    children: React.ReactNode
    pageTitle: string
}

function Layout(props: LayoutProps) {
    const { children, pageTitle } = props
  return (
    <>
        <Head>
            <title>{pageTitle}</title>
        </Head>

        <Header/>
        {children}
    </>
  )
}

export default Layout