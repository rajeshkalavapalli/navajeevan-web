// components/DonateModal.jsx
import React, { useState } from 'react';
// import { submitDonation } from '../../donate-backend/server.js';

function DonateModal({ show, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', amount: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5000/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      alert('Thank you! Please proceed with bank transfer shown below.');
      onClose();
    } catch (error) {
      alert('Error submitting. Please try again later.');
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full relative">
        <h2 className="text-xl font-semibold text-[#2c3e50] mb-4">Donate to Navajeevan</h2>
        <p className="text-sm text-gray-600 mb-4">
          Please transfer your donation to the following bank account and let us know your details:
        </p>
        <div className="bg-gray-100 p-4 rounded mb-4 text-sm text-gray-800">
          <p><strong>Bank Name:</strong> State Bank of India</p>
          <p><strong>Account Name:</strong> Navajeevan Organisation</p>
          <p><strong>Account Number:</strong> 152010100063081</p>
          <p><strong>IFSC Code:</strong> UTIB0000152</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="name" placeholder="Your Name" required onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="email" placeholder="Your Email" type="email" required onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="amount" placeholder="Donation Amount (₹)" type="number" required onChange={handleChange} className="w-full p-2 border rounded" />
          <button type="submit" className="bg-[#27ae60] text-white px-4 py-2 rounded w-full">I've Donated</button>
        </form>
        <button onClick={onClose} className="mt-4 text-sm text-gray-500 underline hover:text-red-600">Close</button>
      </div>
    </div>
  );
}




export default DonateModal;
