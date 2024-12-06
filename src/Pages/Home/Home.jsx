import React, { useContext, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Hero from "./Hero";
import { AppContext } from "../../Context/ContextProvider";
import { Link } from "react-router-dom";
import RunningCampaigns from "./RunningCampaigns";
import OurImpact from "./OurImpact";
import RightPlace from "./RightPlace";
import SuccessStoris from "./SuccessStoris";

import { Fade } from "react-awesome-reveal";

const Home = () => {
  const { apiUrl } = useContext(AppContext);
  const [campaigns, setCampaigns] = useState([]);

  // Fetch campaigns
  useEffect(() => {
    axios
      .get(`${apiUrl}/api/campaigns?limit=6&status=running`)
      .then((response) => {
        setCampaigns(response.data);
      })
      .catch((error) => {
        //console.error("Error fetching campaigns:", error);
      });
  }, [apiUrl]);

  //console.log(campaigns);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition duration-300">
      {/* Banner/Slider */}
      <Hero />

      {/* Running Campaign Section */}

      <RunningCampaigns campaigns={campaigns}></RunningCampaigns>

      {/* Our Impact */}
      <OurImpact />
      {/* You're in the Right Place Section */}
      <RightPlace />
      {/* Success Storis */}
      <SuccessStoris />
    </div>
  );
};

export default Home;
