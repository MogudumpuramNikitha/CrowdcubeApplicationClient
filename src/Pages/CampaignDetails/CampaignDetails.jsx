import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../../Context/ContextProvider";

const CampaignDetails = () => {
  const { id } = useParams();
  const { apiUrl, user } = useContext(AppContext);
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch campaign details
  useEffect(() => {
    axios
      .get(`${apiUrl}/api/campaigns/${id}`)
      .then((response) => {
        setCampaign(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching campaign details:", error);
        setLoading(false);
        toast.error("Campaign details could not be fetched.");
      });
  }, [id, apiUrl]);

  // Handle donation
  const handleDonate = () => {
    if (!user) {
      toast.error("Please log in to donate.");
      navigate("/login");
      return;
    }

    const donationData = {
      campaignId: id,
      campaignName: campaign.title,
      amount: campaign.minDonation,
      userEmail: user.email,
      userName: user.displayName,
    };

    axios
      .post(`${apiUrl}/api/donations`, donationData)
      .then(() => {
        toast.success("Donation successful!");
      })
      .catch((error) => {
        console.error("Error donating:", error);
        toast.error("Donation failed! Please try again.");
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!campaign) {
    return (
      <div className="flex justify-center items-center h-screen">
        Campaign not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={
            campaign?.image ||
            "https://media.istockphoto.com/id/1369579737/photo/funding-financing-business-project.jpg?s=612x612&w=0&k=20&c=0yzRV9ekhVGK3uFw41BzMqrQnMDzXaGOeDZZsWeEaoc="
          }
          alt={campaign.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {campaign.title}
          </h1>
          <p className="text-gray-600 mb-4">{campaign.description}</p>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Type:</span> {campaign.type}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Minimum Donation:</span> $
            {campaign.minDonation}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Deadline:</span>{" "}
            {new Date(campaign.deadline).toLocaleDateString()}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Organizer:</span>{" "}
            {campaign.userName} ({campaign.userEmail})
          </p>
          <button
            onClick={handleDonate}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded mt-6 w-full"
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
