import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import UseTitle from "../../hooks/UseTitle";

const ServicesSection = ({ service }) => {
  UseTitle("home");
  const { image, name, price, description, _id } = service;
  return (
    <div>
      <div className="card card-compact mt-16 bg-base-100 shadow-xl">
        <PhotoProvider>
          <figure>
            <PhotoView src={image}>
              <img
                className="h-64 mt-3 object-fill rounded-lg"
                src={image}
                alt=""
              />
            </PhotoView>
          </figure>
        </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price:{price}</p>
          <p>{description.slice(0, 100) + "...."}</p>
          <div className="card-actions justify-end">
            <Link to={`/services/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
