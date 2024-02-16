"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Logo = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div className="flex items-center gap-4">
      <Image src={"/refaim_badge.png"} alt="Logo" width={50} height={50} />
      {user && <p className="text-white text-lg">שלום, {user?.fullName}</p>}
    </div>
  );
};

export default Logo;
