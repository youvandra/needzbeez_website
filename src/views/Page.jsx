import React from "react";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Roadmap from "../components/Roadmap";
import Slider from "../components/Slider";
import Header from "../components/Header";
import Teams from "../components/Teams";
import Our from "../components/Our";

export default function Page() {
  return (
    <>
      <Navbar />
      <Header />
      <Slider />
      <Our />
      <Roadmap />
      <Faq />
      <Teams />
      <Footer />
    </>
  );
}
