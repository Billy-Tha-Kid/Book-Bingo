import React from "react";

function Footer({ extra }) {
  return (
    <footer className="p-4 rounded-lg md:items-center justify-center md:p-6">
      <span className="text-sm sm:text-center block">
        Made with &hearts; by{" "}
        <a href="https://github.com/luoabd/" className="hover:underline">
          luoabd.
        </a>
      </span>
      <span
        className={"text-sm sm:text-center " + (extra ? "block" : "hidden")}
      >
        Bingo card adapted from{" "}
        <a
          href="https://www.reddit.com/user/CoffeeArchives"
          className="hover:underline"
        >
          u/CoffeeArchives.
        </a>
      </span>
    </footer>
  );
}

export default Footer;
