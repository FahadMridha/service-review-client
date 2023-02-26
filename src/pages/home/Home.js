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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          consectetur tenetur ex ea quae. Corrupti eligendi perferendis vitae
          distinctio, reprehenderit delectus eos doloremque magnam voluptas
          recusandae beatae eum minima! Rerum nam ipsam saepe. Minima officia,
          non modi veniam recusandae asperiores, voluptate excepturi repellendus
          est esse ab fugit pariatur porro exercitationem? Sit sequi unde est
          dignissimos, obcaecati accusantium rerum corrupti beatae quos alias
          maxime minus amet ipsum tempore officia neque molestias laborum esse,
          cum at quae fugiat deserunt. Sunt, sequi, repudiandae, consectetur
          necessitatibus architecto voluptatem consequuntur ducimus repellendus
          itaque doloribus sit velit quasi ad repellat veniam dolore assumenda
          maxime tempore! Vitae!
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
