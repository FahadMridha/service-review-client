import React, { useEffect, useState } from "react";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h3>home :{services.length}</h3>
    </div>
  );
};

export default Home;
