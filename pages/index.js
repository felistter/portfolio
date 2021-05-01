import Head from "next/head";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import Inquiry from "./Inquiry";
import LandingHeader from "./LandingHeader";
import Navbar from "./Navbar";
import Works from "./Works";

export default function Home() {
  return (
    <div id="root">
      <Head>
        <title>Svetlana Shkarina</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal portfolio"
        />
        <meta name="title" property="og:title" content="Personal portfolio" />
        <meta property="og:type" content="Website" />
        <meta name="image" property="og:image" content="https://github.com/felistter/portfolio/blob/main/public/portfolio.png?raw=true" />
        <meta name="description" property="og:description" content="Personal portfolio" />
        <meta name="author" content="Svetlana Shkarina" />
      </Head>
      <LandingHeader>
        <Navbar />
        <Hero />
      </LandingHeader>
      <Education />
      <Experience />
      <Works />
      <Inquiry />
      <Footer />
    </div>
  );
}
