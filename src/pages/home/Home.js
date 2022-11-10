import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseTitle from "../../hooks/UseTitle";
import Banner from "./Banner";
import Section from "./Section";
import ServicesSection from "./ServicesSection";

const Home = () => {
  const [services, setServices] = useState([]);
  const [limit, setLimit] = useState(3);
  UseTitle("home");
  useEffect(() => {
    console.log(limit);
    fetch(
      `https://service-review-server-side.vercel.app/services?size=${limit}`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [limit]);
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

      <button className="btn btn-ghost my-4 text-center bg-lime-200 ">
        <Link to="/services">See All Services </Link>
      </button>

      <Section />
    </div>
  );
};

export default Home;
