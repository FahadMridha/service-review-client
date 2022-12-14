import React, { useEffect, useState } from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import UseTitle from "../../hooks/UseTitle";
import Spinner from "../../shared/spinner/Spinner";

const Services = () => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  UseTitle("Services");
  useEffect(() => {
    fetch("https://service-review-server-side.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <>
        <h2 className="text-xl text-green-500">Loading...........</h2>
        <div className="w-16 h-16 border-4 border-dashed border-green-500 rounded-full animate-spin dark:border-green-500"></div>
      </>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mx-10 my-6">
      {services &&
        services.map((service) => (
          <div key={service._id}>
            <div className="card card-compact  bg-base-100 shadow-xl">
              <PhotoProvider>
                <figure>
                  <PhotoView src={service.image}>
                    <img
                      className="h-64 mt-3 object-cover rounded-lg"
                      src={service.image}
                      alt=""
                    />
                  </PhotoView>
                </figure>
              </PhotoProvider>
              <div className="card-body">
                <h2 className="card-title">{service.name}</h2>
                <p>Price:{service.price}</p>
                <p>{service?.description.slice(0, 100) + "...."}</p>
                <div className="card-actions justify-end">
                  <Link to={`/services/${service._id}`}>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Services;
