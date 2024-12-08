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

const Home = () => {
  const { apiUrl } = useContext(AppContext);
  const [campaigns, setCampaigns] = useState([]);

  // Fetch campaigns
  useEffect(() => {
    axios
      .get(`${apiUrl}/api/campaigns`)
      .then((response) => {
        setCampaigns(response.data);
      })
      .catch((error) => {});
  }, [apiUrl]);

  const activeCampaigns = campaigns.filter(
    (campaign) => new Date(campaign.deadline) > new Date()
  );
  // Limit to 6 campaigns
  const displayedCampaigns = activeCampaigns.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition duration-300">
      {/* Banner/Slider */}
      <Hero />

      {/* Running Campaign Section */}

      <RunningCampaigns
        key={displayedCampaigns._id}
        campaigns={displayedCampaigns}
      ></RunningCampaigns>

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
