import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";

function Home() {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <header className="flex justify-center pb-6">
        <h1 className="text-3xl underline font-bold"> B+L Book Bingo 2026 </h1>
      </header>
      <div className="flex flex-wrap items-center justify-center">
          <Link
            to="/bl2026"
            className="bg-coolor-2 w-full lg:w-1/3 text-black font-bold py-2 px-4 rounded-lg text-center mx-4 mb-4"
          >
            B+L Book Bingo 2026
          </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
