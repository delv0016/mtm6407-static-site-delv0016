import React from "react";
import Navlink from "./Navlink";

interface HeaderProps {
  // Add any props that the Header component expects
}
const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="text-center mt-16">
      {!location.pathname.includes("study-case") && (
        <>
          <h1 className="text-5xl font-bold text-gray-900">
            Hi there, I'm Lia
          </h1>
          <p className="text-lg text-gray-600 mt-4">Digital & UX Designer</p>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Driven and creative with a solid foundation in digital design and a
            keen eye for crafting intuitive, user-centred digital experiences.
            Adept at translating stakeholder requirements into compelling
            designs that blend functionality and aesthetics.
          </p>
        </>
      )}
      <Navlink />
    </header>
  );
};

export default Header;
