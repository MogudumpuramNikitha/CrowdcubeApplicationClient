import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../../Context/ContextProvider";
import { toast } from "react-toastify";

const MyDonations = () => {
  const { user, apiUrl } = useContext(AppContext);
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      axios
        .get(`${apiUrl}/api/myDonations`, { params: { email: user.email } })
        .then((response) => {
          setDonations(response.data);
          setLoading(false);
        })
        .catch((error) => {
          //console.error("Error fetching donations:", error);
          toast.error("Could not fetch your donations.");
          setLoading(false);
        });
    }
  }, [apiUrl, user]);

  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-6">My Donations</h1>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : donations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.map((donation) => (
            <div
              key={donation._id}
              className="bg-white dark:bg-gray-800  shadow-lg rounded-lg p-6"
            >
              <h2 className="text-xl font-bold mb-2">
                {donation.campaignName}
              </h2>
              <p className="text-gray-600 dark:text-white mb-2">
                Donation Amount: ${donation.amount}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No donations found.</p>
      )}
    </div>
  );
};

export default MyDonations;
