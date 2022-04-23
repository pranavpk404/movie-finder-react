import React, { useEffect } from "react";
import NavbarContent from "./NavbarContent";
import "./css/Navbar.css";

function Navbar({ search }) {
  useEffect(() => {
    document
      .getElementById("searchBar")
      .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
          document.getElementById("searchBtn").click();
        }
      });
  }, []);

  return (
    <header>
      <nav className="navbar ">
        <ul>
          <li id="list">
            <div className="dropdown">
              <button className="btn">Genre</button>
              <div className="dropdown-content">
                <NavbarContent genre="Trending" />
                <NavbarContent genre="Netflix Originals" />
                <NavbarContent genre="Top Rated" />
                <NavbarContent genre="Action" />
                <NavbarContent genre="Comedy" />
                <NavbarContent genre="Horror" />
                <NavbarContent genre="War" />
                <NavbarContent genre="Fiction" />
                <NavbarContent genre="Romance" />
                <NavbarContent genre="Adventure" />
                <NavbarContent genre="Mystery" />
                <NavbarContent genre="Thriller" />
                <NavbarContent genre="Animation" />
                <NavbarContent genre="Crime" />
                <NavbarContent genre="Drama" />
                <NavbarContent genre="Family" />
                <NavbarContent genre="Fantasy" />
                <NavbarContent genre="History" />
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <div className="searchBar">
            <input
              type="search"
              id="searchBar"
              placeholder="Search for Fav movies"
            />
            <img
              id="searchBtn"
              onClick={search}
              alt="search"
              src="https://img.icons8.com/color/38/000000/search--v1.png"
            />
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
