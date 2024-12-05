import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../../Context/ContextProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UpdateCampaign = () => {
  const { id } = useParams(); // Get the campaign ID from URL params
  const { user, apiUrl } = useContext(AppContext);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    type: "personal issue",
    description: "",
    minDonation: "",
    deadline: startDate.toISOString().slice(0, 10),
  });

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/campaigns/${id}`)
      .then((response) => {
        const campaign = response.data;
        setFormData({
          image: campaign.image,
          title: campaign.title,
          type: campaign.type,
          description: campaign.description,
          minDonation: campaign.minDonation,
          deadline: campaign.deadline,
        });
        setStartDate(new Date(campaign.deadline));
      })
      .catch((error) => {
        console.error("Error fetching campaign data:", error);
        toast.error("Failed to load campaign data.");
      });
  }, [id, apiUrl]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle date change for Deadline
  const handleDateChange = (date) => {
    setStartDate(date);
    setFormData({
      ...formData,
      deadline: date.toISOString().slice(0, 10),
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      await axios.put(`${apiUrl}/api/campaigns/${id}`, formData);
      toast.success("Campaign updated successfully!");
      navigate("/myCampaign");
    } catch (error) {
      console.error("Error updating campaign:", error);
      toast.error("Failed to update campaign. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Update Campaign</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image URL */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Campaign Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Campaign Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Campaign Type */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Campaign Type
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="personal issue">Personal Issue</option>
            <option value="startup">Startup</option>
            <option value="business">Business</option>
            <option value="creative ideas">Creative Ideas</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Minimum Donation */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Minimum Donation Amount
          </label>
          <input
            type="number"
            name="minDonation"
            value={formData.minDonation}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Deadline
          </label>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Read-Only Fields */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            User Email
          </label>
          <input
            type="email"
            value={user.email}
            readOnly
            className="w-full px-4 py-2 border bg-gray-100 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            User Name
          </label>
          <input
            type="text"
            value={user.displayName}
            readOnly
            className="w-full px-4 py-2 border bg-gray-100 rounded-lg"
          />
        </div>

        {/* Update Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Update Campaign
        </button>
      </form>
    </div>
  );
};

export default UpdateCampaign;
