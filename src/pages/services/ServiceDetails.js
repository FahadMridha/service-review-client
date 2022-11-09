import React from "react";
import { useLoaderData } from "react-router-dom";
import Review from "./Review";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { image, name, price, description } = service;
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-lime-100">
          <div className="hero-content flex-col lg:flex-row gap-6">
            <img
              src={image}
              className="max-w-md h-full rounded-lg shadow-2xl"
              alt=""
            />
            <div>
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="font-semibold mt-4">Price:{price}</p>
              <p className="py-6">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div>{<Review service={service}></Review>}</div>
    </div>
  );
};

export default ServiceDetails;
