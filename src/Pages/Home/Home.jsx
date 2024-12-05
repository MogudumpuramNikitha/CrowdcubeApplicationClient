import React, { useContext, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Hero from "./Hero";
import { AppContext } from "../../Context/ContextProvider";
import { Link } from "react-router-dom";

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
        console.error("Error fetching campaigns:", error);
      });
  }, [apiUrl]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition duration-300">
      {/* Banner/Slider */}
      <Hero />

      {/* Running Campaign Section */}
      <section className="running-campaigns py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Running Campaigns
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {campaigns?.length > 0 ? (
            campaigns.map((campaign) => (
              <div
                key={campaign._id}
                className="campaign-card bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-2">{campaign.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {campaign.description}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Deadline: {new Date(campaign.deadline).toLocaleDateString()}
                </p>
                <Link
                  to={`/campaign/${campaign._id}`}
                  className="text-blue-600 dark:text-blue-400 mt-4 block"
                >
                  See More
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3">
              No running campaigns found.
            </p>
          )}
        </div>
      </section>

      {/* Extra Section 1: Our Impact */}
      <section className="our-impact py-16 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
        <div className="flex flex-wrap justify-center">
          <div className="max-w-lg p-4">
            <h3 className="text-xl font-bold mb-2">1000+ Lives Impacted</h3>
            <p>
              We have successfully funded projects that made a significant
              impact on communities across the country.
            </p>
          </div>
          <div className="max-w-lg p-4">
            <h3 className="text-xl font-bold mb-2">500+ Volunteers</h3>
            <p>
              Our dedicated volunteers work tirelessly to ensure each campaign
              meets its goals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
