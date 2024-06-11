import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-pink-500" : "bg-blue-500"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto my-2 flex items-center justify-between h-full">
        <Link to={"/"}>
          <div className="text-xl font-bold capitalize text-white mb-1">
            FakeStore
          </div>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative text-md font-bold capitalize text-white mb-1"
        >
          <BsBag className="text-2xl" />
          <div>{itemAmount}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
