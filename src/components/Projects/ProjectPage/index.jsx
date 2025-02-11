import React from "react";

const Construction = () => {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">
          UNDER CONSTRACTION
        </h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          I'm Sorry{" "}
        </p>

        <p className="mt-4 text-gray-500">
          Under Construction. We're working hard to bring you something amazing!
        </p>

        <a
          href="#"
          className="mt-6 inline-block rounded-sm bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:ring-3 focus:outline-hidden"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default Construction;
