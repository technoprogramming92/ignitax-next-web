import React from "react";
import { Metadata } from "next";
import HomeMain from "@/pages/homes/home-1";
import Homeignitax from "@/pages/homes/home-ignitax";

export const metadata: Metadata = {
  title: "IGNITAX | Your Virtual Service Provider",
};

const Home = () => {
  return <Homeignitax />;
};

export default Home;
