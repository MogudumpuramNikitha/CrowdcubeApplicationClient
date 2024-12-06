import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/ContextProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddCampaign = () => {
  const { user, apiUrl } = useContext(AppContext);
  const [startDate, setStartDate] = useState(new Date());

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    type: "personal issue",
    description: "",
    minDonation: "",
    deadline: startDate.toISOString().slice(0, 10),
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    setFormData({
      ...formData,
      deadline: date.toISOString().slice(0, 10),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.image ||
      !formData.title ||
      !formData.description ||
      !formData.minDonation ||
      !formData.deadline
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/api/campaigns`, {
        ...formData,
        userEmail: user.email,
        userName: user.displayName,
      });

      if (response.data.insertedId) {
        toast.success("Campaign added successfully!");
        navigate("/");
      }
    } catch (error) {
      //console.error(error);
      toast.error("Failed to add campaign. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-gray-50 dark:bg-gray-800 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
        Add New Campaign
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image URL */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            placeholder="Enter image URL"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            required
          />
        </div>

        {/* Campaign Title */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Campaign Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter campaign title"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            required
          />
        </div>

        {/* Campaign Type */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Campaign Type
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
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
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter campaign description"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Minimum Donation */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Minimum Donation Amount
          </label>
          <input
            type="number"
            name="minDonation"
            value={formData.minDonation}
            onChange={handleInputChange}
            placeholder="Enter minimum donation amount"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            required
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Deadline
          </label>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            required
            dateFormat="yyyy-MM-dd"
          />
        </div>

        {/* User Email (Read-Only) */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            User Email
          </label>
          <input
            type="email"
            value={user.email}
            readOnly
            className="w-full px-4 py-2 border bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg cursor-not-allowed"
          />
        </div>

        {/* User Name (Read-Only) */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            User Name
          </label>
          <input
            type="text"
            value={user.displayName}
            readOnly
            className="w-full px-4 py-2 border bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg cursor-not-allowed"
          />
        </div>

        {/* Add Button */}
        <button
          type="submit"
          className="w-full rounded-lg px-4 py-2   bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33] text-white  text-center font-extrabold transition-colors duration-300 whitespace-nowrap"
        >
          Add Campaign
        </button>
      </form>
    </div>
  );
};

export default AddCampaign;
