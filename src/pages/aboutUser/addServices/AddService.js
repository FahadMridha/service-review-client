import React from "react";
import toast from "react-hot-toast";
import UseTitle from "../../../hooks/UseTitle";

const AddService = () => {
  UseTitle("add service");
  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const photoURL = form.photoURL.value;
    const description = form.description.value;
    const timestamp = Date.now();
    // // timestamp in seconds
    // console.log(Math.floor(timestamp / 1000));

    const newService = {
      name,
      price,
      image: photoURL,
      description,
      timestamp,
    };
    fetch("https://service-review-server-side.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Added a new services ");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form
        className="space-y-12 ng-untouched ng-pristine ng-valid text-center"
        onSubmit={handlerSubmit}
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Your service name"
            className="w-1/2 px-3 py-2 border rounded-md border-gray-300 shadow-xl focus:border-gray-900 bg-slate-100  text-gray-500"
          />
        </div>
        <div>
          <input
            type="text"
            name="price"
            placeholder="Enter price"
            className="w-1/2 px-3 py-2 border rounded-md border-gray-300 shadow-xl focus:border-gray-900 bg-slate-100 text-gray-500"
            data-temp-mail-org="0"
          />
        </div>
        <div>
          <input
            type="text"
            name="image"
            id="photoURL"
            placeholder="Provide your Photo URL"
            className="w-1/2 px-3 py-2 border rounded-md border-gray-300 shadow-xl focus:border-gray-900 bg-slate-100 text-gray-500"
            data-temp-mail-org="0"
          />
        </div>
        <div>
          <div>
            <input
              type="text"
              name="description"
              placeholder="Add description"
              className="w-1/2 px-3 py-2 border rounded-md border-gray-300 bg-slate-100 shadow-xl focus:border-gray-900 text-gray-500"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-1/2 px-8 py-3 font-semibold rounded-md bg-gray-900 bann hover:bg-gray-700 hover:text-white text-gray-100"
            >
              Add new Service
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddService;
