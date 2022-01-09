import React from "react";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Roadmap from "../components/Roadmap";
import Slider from "../components/Slider";
import Header from "../components/Header";

export default function Page() {
  return (
    <>
      <Navbar />
      <Header />
      <Slider />
      <Roadmap />
      <Faq />
      <Footer />
    </>
  );
}
