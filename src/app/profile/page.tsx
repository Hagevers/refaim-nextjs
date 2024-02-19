"use client";

import { Button } from "@/components/ui/button";
import { Protect, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const Profile = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <Protect>
      <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-100">
        <h1>שלום {user?.fullName}</h1>
        <h2>האיזור האישי נמצא כעת בפיתוח, מצטערים על אי הנוחות</h2>
        <h3>למעבר לדף הראשי</h3>
        <Link href={"/"}>
          <Button>לחץ כאן</Button>
        </Link>
      </div>
    </Protect>
  );
};

export default Profile;
