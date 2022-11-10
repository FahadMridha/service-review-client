import React from "react";
import UseTitle from "../../hooks/UseTitle";

const Blog = () => {
  UseTitle("blog");
  return (
    <div className="w-full">
      <h2 className="text-center text-xl border shadow-xl mt-10  p-6 mx-8 rounded-md  bg-slate-100 font-bold text-orange-700">
        Question Section
      </h2>
      <div className="bg-slate-200 p-4 shadow-xl rounded-lg text-lg mx-8 mt-5">
        <h1 className="test-2xl font-bold text-left">
          Qsn1.difference between sql and nosql?
        </h1>
        <p>
          <span className="font-semibold">Answer:</span> <br />
          CSQL is the programming language used to interface with relational
          databases. (Relational databases model data as records in rows and
          tables with logical links between them). NoSQL is a class of DBMs that
          are non-relational and generally do not use SQL.When it comes to
          choosing a database the biggest decisions is picking a relational
          (SQL) or non-relational (NoSQL) data structure. While both the
          databases are viable options still there are certain key differences
          between the two that users must keep in mind when making a decision.
        </p>
      </div>
      <div className=" bg-slate-200 p-4 shadow-xl rounded-lg text-lg mx-8 mt-5">
        <h1 className="test-2xl font-bold text-left">
          Qsn2. What is JWT, and how does it work?
        </h1>
        <p>
          <span className="font-semibold">Answer:</span> <br />
          What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard
          (RFC 7519) for securely transmitting information between parties as
          JSON object. It is compact, readable and digitally signed using a
          private key/ or a public key pair by the Identity Provider(IdP).
          <br />
          The purpose of using JWT is not to hide data but to ensure the
          authenticity of the data. JWT is signed and encoded, not encrypted.
          JWT is a token based stateless authentication mechanism. Since it is a
          client-side based stateless session, server doesn't have to completely
          rely on a datastore(database) to save session information.
        </p>
      </div>
      <div className=" bg-slate-200 p-4 shadow-xl rounded-lg text-lg mx-8 mt-5">
        <h1 className="test-2xl font-bold text-left">
          Qsn3.What is the difference between javascript and NodeJS??
        </h1>
        <p>
          <span className="font-semibold">Answer:</span> <br />
          JavaScript is a simple programming language that can be used with any
          browser that has the JavaScript Engine installed. Node. js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language.Javascript is a programming language
          that is used for writing scripts on the website. NodeJS is a
          Javascript runtime environment
        </p>
      </div>
      <div className=" bg-slate-200 p-4 shadow-xl rounded-lg text-lg mx-8 mt-5">
        <h1 className="test-2xl font-bold text-left">
          Qsn4. How does NodeJS handle multiple requests at the same time?
        </h1>
        <p>
          <span className="font-semibold">Answer:</span> <br />
          How NodeJS handle multiple client requests? NodeJS receives multiple
          client requests and places them into EventQueue. NodeJS is built with
          the concept of event-driven architecture. NodeJS has its own EventLoop
          which is an infinite loop that receives requests and processes them.We
          know NodeJS application is single-threaded. Say, if processing
          involves request A that takes 10 seconds, it does not mean that a
          request which comes after this request needs to wait 10 seconds to
          start processing because NodeJS event loops are only single-threaded.
          The entire NodeJS architecture is not single-threaded.
        </p>
      </div>
    </div>
  );
};

export default Blog;
