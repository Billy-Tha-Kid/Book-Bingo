import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";

function Home() {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <header className="flex justify-center pb-6">
        <h1 className="text-3xl underline font-bold"> Bingo Maker </h1>
      </header>
      <div className="flex flex-wrap items-center justify-center">
          <button className="bg-coolor-2 w-full lg:w-1/3 text-black font-bold py-2 px-4 rounded-lg align-center mx-4 mb-4">
            <Link to="/fullybooked25">Fully Booked 2025</Link>
          </button>
          <button className="bg-coolor-2 w-full lg:w-1/3 text-black font-bold py-2 px-4 rounded-lg align-center mx-4 mb-4">
            <Link to="/bongo24">Chaos Bongo</Link>
          </button>
          <button className="bg-coolor-2 w-full lg:w-1/3 text-black font-bold py-2 px-4 rounded-lg align-center mx-4 mb-4">
            <Link to="/rfantasy">r/Fantasy 2024 Book Bingo</Link>
          </button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
