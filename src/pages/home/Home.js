import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseTitle from "../../hooks/UseTitle";
import Banner from "./Banner";
import Section from "./Section";
import ServicesSection from "./ServicesSection";
import Start from "./Start";

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
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          quisquam laudantium numquam mollitia asperiores enim, dolore porro
          nihil, quibusdam odit molestias accusantium tempora nam doloremque
          adipisci, neque debitis dolor in? Totam aliquam obcaecati architecto
          praesentium quo omnis rem quia alias repellat est aspernatur et
          repellendus temporibus fugit, unde autem maiores? Ab nemo repellendus
          reprehenderit maxime rerum earum, nulla vel consequatur eos, eius
          minima architecto ducimus quos officiis voluptates modi, sapiente
          expedita sit quibusdam. Minus quibusdam vel ducimus, et in harum a quo
          suscipit. Magnam, ullam. Nihil dicta, quasi possimus unde quod,
          asperiores odio eius, recusandae nesciunt laborum laboriosam incidunt
          a!
        </p>
        <p className="text-center text-5xl font-bold my-12 ">My Services</p>
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
      <Start />
    </div>
  );
};

export default Home;
