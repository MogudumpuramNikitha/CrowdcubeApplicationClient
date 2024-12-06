import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../Context/ContextProvider";

const AllCampaign = () => {
  const { apiUrl } = useContext(AppContext);
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("desc"); // Default to descending

  // Fetch all campaigns from the API and sort them by default in descending order
  useEffect(() => {
    axios
      .get(`${apiUrl}/api/campaigns`)
      .then((response) => {
        const sortedCampaigns = response.data.sort(
          (a, b) => b.minDonation - a.minDonation
        );
        setCampaigns(sortedCampaigns);
        setLoading(false);
      })
      .catch((error) => {
        //console.error("Error fetching campaigns:", error);
        setLoading(false);
      });
  }, [apiUrl]);

  //console.log(campaigns);

  // Toggle between ascending and descending order
  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    const sortedCampaigns = [...campaigns].sort((a, b) =>
      newSortOrder === "asc"
        ? a.minDonation - b.minDonation
        : b.minDonation - a.minDonation
    );
    setCampaigns(sortedCampaigns);
    setSortOrder(newSortOrder);
  };

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
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleSortOrder}
          className="rounded-lg px-4 py-2   bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33] text-white  text-center font-extrabold transition-colors duration-300 whitespace-nowrap"
        >
          Sort by {sortOrder === "asc" ? "Descending" : "Ascending"}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-700 dark:text-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="py-3 px-4 bg-gray-200 text-gray-800 text-left text-sm font-semibold uppercase ">
                index
              </th>
              <th className="py-3 px-4 bg-gray-200 text-gray-800 text-left text-sm font-semibold uppercase ">
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
            {campaigns.map((campaign, i) => (
              <tr
                key={campaign._id}
                className="border-b hover:bg-gray-100 dark:hover:bg-gray-500 "
              >
                <td className="py-3 px-4 text-gray-700 dark:text-white">
                  {i + 1}
                </td>
                <td className="py-3 px-4 text-gray-700 dark:text-white">
                  {campaign.title}
                </td>
                <td className="py-3 px-4 text-gray-700 dark:text-white">
                  {campaign.type}
                </td>
                <td className="py-3 px-4 text-gray-700 dark:text-white">
                  ${campaign.minDonation}
                </td>
                <td className="py-3 px-4 text-gray-700 dark:text-white">
                  {new Date(campaign.deadline).toLocaleDateString()}
                </td>
                <td className="py-3 px-4">
                  <Link
                    to={`/campaign/${campaign._id}`}
                    className="rounded-lg px-4 py-2   bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33] text-white  text-center font-extrabold transition-colors duration-300 whitespace-nowrap"
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
