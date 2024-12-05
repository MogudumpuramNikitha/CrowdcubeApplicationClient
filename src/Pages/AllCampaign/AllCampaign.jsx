import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../Context/ContextProvider";

const AllCampaign = () => {
  const { apiUrl } = useContext(AppContext);
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all campaigns from the API
  useEffect(() => {
    axios
      .get(`${apiUrl}/api/campaigns`)
      .then((response) => {
        setCampaigns(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching campaigns:", error);
        setLoading(false);
      });
  }, [apiUrl]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (campaigns.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-500">No campaigns found.</div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">All Campaigns</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="py-3 px-4 bg-gray-200 text-gray-600 text-left text-sm font-semibold uppercase">
                Title
              </th>
              <th className="py-3 px-4 bg-gray-200 text-gray-600 text-left text-sm font-semibold uppercase">
                Type
              </th>
              <th className="py-3 px-4 bg-gray-200 text-gray-600 text-left text-sm font-semibold uppercase">
                Minimum Donation
              </th>
              <th className="py-3 px-4 bg-gray-200 text-gray-600 text-left text-sm font-semibold uppercase">
                Deadline
              </th>
              <th className="py-3 px-4 bg-gray-200 text-gray-600 text-left text-sm font-semibold uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign._id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4 text-gray-700">{campaign.title}</td>
                <td className="py-3 px-4 text-gray-700">{campaign.type}</td>
                <td className="py-3 px-4 text-gray-700">
                  ${campaign.minDonation}
                </td>
                <td className="py-3 px-4 text-gray-700">
                  {new Date(campaign.deadline).toLocaleDateString()}
                </td>
                <td className="py-3 px-4">
                  <Link
                    to={`/campaign/${campaign._id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded whitespace-nowrap"
                  >
                    See More
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaign;
