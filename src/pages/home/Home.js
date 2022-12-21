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
    // console.log(limit);
    //only limit service data show in home page
    fetch(
      `https://service-review-server-side.vercel.app/services?size=${limit}`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [limit]);
  return (
    <div className="m-8">
      <Banner />
      <div>
        <p className="text-center text-3xl font-bold mt-12 ">Services</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <ServicesSection
              key={service._id}
              service={service}
            ></ServicesSection>
          ))}
        </div>
        <button className="btn btn-primary my-4 text-center border ">
          <Link to="/services">See All Services </Link>
        </button>
      </div>

      <Section />
    </div>
  );
};

export default Home;
