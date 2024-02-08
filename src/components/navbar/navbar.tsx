"use client";
import React from "react";
import ActionButtons from "./action-buttons";
import Logo from "./logo";
import { NavigationBar } from "./navigation";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-40 px-10">
      <Logo />
      <NavigationBar />
      <ActionButtons />
    </div>
  );
};

export default Navbar;
