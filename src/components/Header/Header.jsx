import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Fevarite from "./Fevarite";
import FevariteListModal from "./FevariteListModal";

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo></Logo>

        <div className="flex items-center gap-4 relative">
          <Search></Search>
          <Fevarite></Fevarite>
          <FevariteListModal></FevariteListModal>
        </div>
      </nav>
    </header>
  );
};

export default Header;
