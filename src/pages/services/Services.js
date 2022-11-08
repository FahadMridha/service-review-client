import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 my-6">
      {services.map((service) => (
        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="h-96 w-full" src={service.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.name}</h2>
              <p>Price:{service.price}</p>
              <p>{service.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
