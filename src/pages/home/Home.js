import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import Section from "./Section";
import ServicesSection from "./ServicesSection";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="m-8">
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServicesSection
            key={service._id}
            service={service}
          ></ServicesSection>
        ))}
      </div>
      <span className="">
        <Link to="/services">
          <button className="btn btn-ghost bg-lime-200 ">See All</button>
        </Link>
      </span>

      <Section />
    </div>
  );
};

export default Home;
