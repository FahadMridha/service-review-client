import React from "react";

const Blog = () => {
  return (
    <div className="w-full">
      <h2 className="text-center text-xl border shadow-xl mt-10  p-6 mx-8 rounded-md  bg-slate-400 font-bold text-orange-700">
        Question Section
      </h2>
      <div className="bg-slate-500 p-4 shadow-xl rounded-lg text-lg mx-8 mt-5">
        <h1 className="test-2xl font-bold text-left">Qsn1.what is cors?</h1>
        <p>
          <span className="font-semibold">Answer:</span> <br />
          Cross-origin resource sharing (CORS) is a mechanism that allows
          restricted resources on a web page to be requested from another domain
          outside the domain. Cross-Origin Resource Sharing (CORS) is an
          HTTP-header based mechanism that allows a server to indicate any
          origins (domain, scheme, or port) other than its own from which a
          browser should permit loading resources. If your REST API's resources
          receive non-simple cross-origin HTTP requests, you need to enable CORS
          support.
        </p>
      </div>
      <div className=" bg-slate-500 p-4 shadow-xl rounded-lg text-lg mx-8 mt-5">
        <h1 className="test-2xl font-bold text-left">
          Qsn2. Why are you using firebase? What other options do you have to
          implement authentication?
        </h1>
        <p>
          <span className="font-semibold">Answer:</span> <br />
          sing firebase because Firebase Authentication provides backend
          services, easy-to-use SDKs, and ready-made UI libraries to
          authenticate users to your app. It supports authentication using
          passwords, phone numbers, popular federated identity providers like
          Google, Facebook and Twitter, and more.The Firebase Realtime Database
          lets you build rich, collaborative applications by allowing secure
          access to the database directly from client-side code.
          <br />
          Other options doi have to implement authentication is Appwrite is a
          backend server for Flutter, Mobile, and Web developers. It is
          open-source, secure, and provides a self-hosting solution that is easy
          to use. It is a great open source Firebase alternative. Appwrite
          supports multiple SDKs, including Flutter, Web, Apple, and Android.
        </p>
      </div>
      <div className=" bg-slate-500 p-4 shadow-xl rounded-lg text-lg mx-8 mt-5">
        <h1 className="test-2xl font-bold text-left">
          Qsn3.How does the private route work?
        </h1>
        <p>
          <span className="font-semibold">Answer:</span> <br />
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated
          (Logged in)
        </p>
      </div>
      <div className=" bg-slate-500 p-4 shadow-xl rounded-lg text-lg mx-8 mt-5">
        <h1 className="test-2xl font-bold text-left">
          Qsn3. What is Node? How does Node work?
        </h1>
        <p>
          <span className="font-semibold">Answer:</span> <br />
          It is a used as backend service where javascript works on the
          server-side of the application. This way javascript is used on both
          frontend and backend. Node. js runs on chrome v8 engine which converts
          javascript code into machine code, it is highly scalable, lightweight,
          fast, and data-intensive. Node allows developers to write JavaScript
          code that runs directly in a computer process itself instead of in a
          browser. Node can, therefore, be used to write server-side
          applications with access to the operating system, file system, and
          everything else required to build fully-functional applications.
        </p>
      </div>
    </div>
  );
};

export default Blog;
