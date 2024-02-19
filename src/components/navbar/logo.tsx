"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Logo = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div className="flex items-center gap-4">
      <Image src={"/new_logo.png"} alt="Logo" width={150} height={100} />
      {user && <p className="text-white text-lg">שלום, {user?.fullName}</p>}
    </div>
  );
};

export default Logo;
