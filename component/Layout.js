
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Header from "./Header"
import Footer from "./Footer"
import Head from "next/head"

const Layout = (props) => {

    return (
        <div style={{ display: '' }} className="FullStyle">
            <Head>
            <title>我只是想知道</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width" />
            <link rel="icon" href="./images/logo_ball.png" />
          </Head>
            <Header />
            {props.children}
            <Footer />
        </div>
    )

}

export default Layout