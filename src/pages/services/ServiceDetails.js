import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { image, name, price, description } = service;
  return (
    <div>
      <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="h-96 w-full" src={image} alt="" />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Price:{price}</p>
            <p>{description}</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <div>
        <h3>Review</h3>
      </div>
    </div>
  );
};

export default ServiceDetails;
