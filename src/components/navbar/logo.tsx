import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image src={"/refaim_badge.png"} alt="Logo" width={50} height={50} />
    </div>
  );
};

export default Logo;
