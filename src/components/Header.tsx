import React from "react";

// Assets
import { ReactComponent as HeaderBgMobile } from "assets/images/bg-header-mobile.svg";
import { ReactComponent as HeaderBgDesktop } from "assets/images/bg-header-desktop.svg";

const Header: React.FC = () => {
  return (
    <header className="bg-cyan-600 mb-8">
      <HeaderBgMobile className="w-full xs:hidden" />
      <HeaderBgDesktop className="hidden w-full xs:block" />
    </header>
  );
};

export default Header;
