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
