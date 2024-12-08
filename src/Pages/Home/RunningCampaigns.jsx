import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const RunningCampaigns = ({ campaigns }) => {
  // console.log(campaigns, isDeadlineOver);

  return (
    <section className="running-campaigns py-16 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Running Campaigns: {campaigns.length}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {campaigns?.length > 0 ? (
          campaigns.map((campaign, i) => (
            <Fade direction="up" delay={i * 200}>
              <div
                key={campaign._id}
                className="campaign-card bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Top Image with Overlay */}
                <div className="relative">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h3 className="text-white text-lg font-bold text-center px-4">
                      {campaign.title}
                    </h3>
                  </div>
                </div>

                {/* Campaign Details */}
                <div className="p-4">
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    Type: <span className="font-semibold">{campaign.type}</span>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    {campaign.description.slice(0, 80)}...
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <span className="font-semibold">Deadline:</span>{" "}
                    {new Date(campaign.deadline).toLocaleDateString()}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 h-10">
                    <span className="font-semibold">Minimum Donation:</span>{" "}
                    <span className="dark:text-green-400  text-gray-700 font-extrabold ml-3">
                      ${campaign.minDonation}
                    </span>
                  </p>

                  {/* CTA Button */}
                  <Link
                    to={`/campaign/${campaign._id}`}
                    className="block  rounded-lg px-4 py-2   bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33] text-white  text-center font-extrabold transition-colors duration-300"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </Fade>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-600 dark:text-gray-400">
            No running campaigns found.
          </p>
        )}
      </div>
    </section>
  );
};

export default RunningCampaigns;
