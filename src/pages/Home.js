import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRoom from "../components/FeaturedRoom";
export default function Home() {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner title="Luxurious rooms" subtitle="Deluxe rooms with wifi">
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
    </>
  );
}
