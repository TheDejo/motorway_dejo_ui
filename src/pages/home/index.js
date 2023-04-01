import React from "react";
import FormSection from "../../page-components/home/FormSection";
import HeroSection from "../../page-components/home/HeroSection";
import HomeSection from "../../page-components/home/HomeSection";

const Home = () => {
    return (
        <section className="home">
            <HeroSection />
            <HomeSection />
            <FormSection />
        </section>
    );
};

export default Home;
