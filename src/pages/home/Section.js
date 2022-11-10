import React from "react";
import img from "../../assets/images/terrenceplankfrontfinal.jpg";

const Section = () => {
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse gap-4">
            <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt="" />
            <div>
              <h1 className="text-5xl font-bold">IMPROVE KEY METRICS</h1>
              <p className="py-6">
                The FITLIGHT® system is perfectly suited for any training or
                physical exercise with metrics to create performance benchmarks.
                The system’s flexibility allows you to create individual
                routines, applicable fitness conditioning, or sport specific
                programs for both athlete and trainer, while sports analysis
                capabilities brings awareness to the athlete’s current form and
                allowing them to create tangible goals to improve.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="hero  bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">TRAIN ANYWHERE</h1>
              <p className="py-6">
                This versatile and adaptable system allows for training nearly
                anywhere, including extreme conditions, with a 50-meter range
                and lights that are visible in nearly any lighting condition.
              </p>
            </div>
          </div>
        </div>
        <div className="hero  bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">PROVEN RELIABILITY</h1>
              <p className="py-6">
                FITLIGHT® is the original light training system. Created in
                2011, we are trusted and loved by elite professionals and
                professional sports teams around the world.
              </p>
            </div>
          </div>
        </div>
        <div className="hero  bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">FULLY COVERED</h1>
              <p className="py-6">
                With an included 1-year warranty, free software updates and
                customer support available online or on the phone, you can be
                sure to get the most out of your new system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
