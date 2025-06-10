// components/DonateModal.jsx
import React, { useState } from 'react';
import { FaTimes, FaHandHoldingHeart, FaClipboard, FaGlobe, FaRupeeSign } from 'react-icons/fa';
import { FaBuildingColumns } from 'react-icons/fa6';

// Our defined color palette - ensuring consistency
const Colors = {
  ForestGreen: '#214E3F',
  Terracotta: '#C8553D',
  StoneBeige: '#DCCBA4',
  CreamyWhite: '#FDFDFD', // Used for modal background
  DarkText: '#333333',     // Explicitly for dark text on light backgrounds
  LightGray: '#F0F0F0',    // Slightly darker than CreamyWhite for contrast
  DarkForestGreen: '#1A362D', // For the informational side background
};

function DonateModal({ show, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', amount: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [donationOrigin, setDonationOrigin] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleDonationOriginChange = (e) => {
    setDonationOrigin(e.target.value);
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!donationOrigin) {
      setError('Please select if you are donating from India or Outside India.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5000/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, donationOrigin }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      alert('Thank you for your interest! Your details have been recorded. Please proceed with the bank transfer using the details provided below. We will contact you based on your provided information to confirm the donation.');
      onClose();
      setFormData({ name: '', email: '', amount: '' });
      setDonationOrigin(null);
    } catch (err) {
      console.error('Donation submission error:', err);
      setError('There was an issue submitting your details. Please check your internet connection or try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyBankDetails = (accountType) => {
    let bankInfo = '';
    if (accountType === 'india') {
      bankInfo = `Bank Name: State Bank of India\nAccount Name: Navajeevan Organisation\nAccount Number: 152010100063081\nIFSC Code: UTIB0000152`;
    } else if (accountType === 'foreign') {
      bankInfo = `Bank Name: Axis Bank\nAccount Name: Navajeevan Organisation (FCRA)\nAccount Number: [YOUR FCRA ACCOUNT NUMBER]\nIFSC Code: [YOUR FCRA IFSC CODE]\nSWIFT Code: [YOUR FCRA SWIFT CODE]`;
    }
    
    if (bankInfo) {
      navigator.clipboard.writeText(bankInfo)
        .then(() => alert('Bank details copied to clipboard!'))
        .catch((err) => console.error('Could not copy text: ', err));
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center p-4">
      <div className={`bg-[${Colors.CreamyWhite}] rounded-2xl shadow-2xl max-w-5xl w-full h-[90vh] flex flex-col lg:flex-row relative overflow-hidden transform transition-all duration-300 scale-100 opacity-100`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-3xl font-light leading-none bg-white rounded-full p-2"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        {/* Left Column: Inspirational Message & Bank Details (Conditional) */}
        <div className={`lg:w-2/5 p-8 flex flex-col justify-center items-center text-center text-amber-600
                        bg-gradient-to-br from-[${Colors.DarkForestGreen}] to-[${Colors.ForestGreen}] relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-10 bg-texture-pattern z-0"></div>
          <div className="relative z-10">
            <FaHandHoldingHeart className="text-6xl text-[${Colors.Terracotta}] mb-6 animate-pulse-slow" />
            <h2 className="text-4xl font-extrabold mb-4 leading-tight">
              Your Contribution Fuels Hope
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              Every donation, big or small, directly supports our programs in education, health, and livelihood for needy vulnerable communities .
              Thank you for being a part of the change!
            </p>

            {/* Bank Details Section - Conditionally rendered */}
            {donationOrigin === 'india' && (
              <div className={`bg-white bg-opacity-15 backdrop-blur-sm p-6 rounded-lg border border-[rgba(255,255,255,0.2)]`}>
                <h3 className={`text-xl font-semibold mb-3 flex items-center justify-center text-[${Colors.DarkText}]`}> {/* Changed text color */}
                  <FaBuildingColumns className="mr-3 text-[${Colors.ForestGreen}]" /> Indian (INR) Account Details: {/* Icon color also checked */}
                </h3>
                <div className={`space-y-2 text-sm text-[${Colors.DarkText}]`}> {/* Changed text color */}
                  <p><strong>Bank Name:</strong> State Bank of India</p>
                  <p><strong>Account Name:</strong> Navajeevan Organisation</p>
                  <p><strong>Account Number:</strong> 152010100063081</p>
                  <p><strong>IFSC Code:</strong> UTIB0000152</p>
                </div>
                <button
                  onClick={() => copyBankDetails('india')}
                  className={`mt-4 px-6 py-2 bg-[${Colors.Terracotta}] text-white rounded-full text-sm font-semibold
                             hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center mx-auto`}
                >
                  <FaClipboard className="mr-2" /> Copy Details
                </button>
              </div>
            )}

            {donationOrigin === 'foreign' && (
              <div className={`bg-white bg-opacity-15 backdrop-blur-sm p-6 rounded-lg border border-[rgba(255,255,255,0.2)]`}>
                <h3 className={`text-xl font-semibold mb-3 flex items-center justify-center text-[${Colors.DarkText}]`}> {/* Changed text color */}
                  <FaBuildingColumns className="mr-3 text-[${Colors.ForestGreen}]" /> FCRA (Foreign) Account Details: {/* Icon color also checked */}
                </h3>
                <div className={`space-y-2 text-sm text-[${Colors.DarkText}]`}> {/* Changed text color */}
                  <p><strong>Bank Name:</strong> Axis Bank</p>
                  <p><strong>Account Name:</strong> Navajeevan Organisation (FCRA)</p>
                  {/* IMPORTANT: REPLACE WITH YOUR ACTUAL FCRA ACCOUNT DETAILS BELOW */}
                  <p><strong>Account Number:</strong> [YOUR FCRA ACCOUNT NUMBER]</p>
                  <p><strong>IFSC Code:</strong> [YOUR FCRA IFSC CODE]</p>
                  <p><strong>SWIFT Code:</strong> [YOUR FCRA SWIFT CODE]</p>
                  {/* END IMPORTANT */}
                </div>
                <button
                  onClick={() => copyBankDetails('foreign')}
                  className={`mt-4 px-6 py-2 bg-[${Colors.Terracotta}] text-white rounded-full text-sm font-semibold
                             hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center mx-auto`}
                >
                  <FaClipboard className="mr-2" /> Copy Details
                </button>
              </div>
            )}

            {!donationOrigin && (
              <p className="text-sm text-gray-300 mt-6">
                Please select your donation origin on the right to see bank details.
              </p>
            )}

            <p className="text-sm text-gray-300 mt-6">
              *Please ensure details are correct for a successful transfer.
            </p>
          </div>
        </div>

        {/* Right Column: Donation Form */}
        <div className="lg:w-3/5 p-8 flex flex-col justify-between">
          <div>
            <h2 className={`text-3xl font-extrabold text-[${Colors.ForestGreen}] mb-6 text-center`}>
              Enter Your Donation Details
            </h2>
            <p className="text-base text-gray-700 mb-6 text-center">
              Please select your donation origin and fill out the form below.
            </p>

            {/* Donation Origin Selection */}
            <div className="mb-6">
              <span className="text-gray-700 text-sm font-medium mb-2 block">I am donating from:</span>
              <div className="flex flex-col sm:flex-row gap-4">
                <label className={`flex-1 flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200
                                  ${donationOrigin === 'india' ? `border-[${Colors.ForestGreen}] ring-2 ring-[${Colors.ForestGreen}] bg-blue-50` : 'border-gray-300 hover:border-gray-400 bg-white'}`}>
                  <input
                    type="radio"
                    name="donationOrigin"
                    value="india"
                    checked={donationOrigin === 'india'}
                    onChange={handleDonationOriginChange}
                    className="mr-3 h-4 w-4 text-[${Colors.ForestGreen}] focus:ring-[${Colors.ForestGreen}]"
                  />
                  <FaRupeeSign className="text-lg mr-2 text-[${Colors.ForestGreen}]" />
                  <span className="font-medium text-gray-800">Within India (INR)</span>
                </label>
                <label className={`flex-1 flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200
                                  ${donationOrigin === 'foreign' ? `border-[${Colors.ForestGreen}] ring-2 ring-[${Colors.ForestGreen}] bg-blue-50` : 'border-gray-300 hover:border-gray-400 bg-white'}`}>
                  <input
                    type="radio"
                    name="donationOrigin"
                    value="foreign"
                    checked={donationOrigin === 'foreign'}
                    onChange={handleDonationOriginChange}
                    className="mr-3 h-4 w-4 text-[${Colors.ForestGreen}] focus:ring-[${Colors.ForestGreen}]"
                  />
                  <FaGlobe className="text-lg mr-2 text-[${Colors.ForestGreen}]" />
                  <span className="font-medium text-gray-800">Outside India (FCRA)</span>
                </label>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="text-gray-700 text-sm font-medium mb-1 block">Your Full Name:</span>
                <input
                  name="name"
                  placeholder="John Doe"
                  type="text"
                  value={formData.name}
                  required
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[${Colors.ForestGreen}] focus:border-transparent text-gray-800"
                />
              </label>
              <label className="block">
                <span className="text-gray-700 text-sm font-medium mb-1 block">Your Email Address:</span>
                <input
                  name="email"
                  placeholder="john.doe@example.com"
                  type="email"
                  value={formData.email}
                  required
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[${Colors.ForestGreen}] focus:border-transparent text-gray-800"
                />
              </label>
              <label className="block">
                <span className="text-gray-700 text-sm font-medium mb-1 block">Donation Amount (₹ / Other Currency):</span>
                <input
                  name="amount"
                  placeholder="e.g., 5000 (INR) or 100 (USD)"
                  type="text"
                  value={formData.amount}
                  required
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[${Colors.ForestGreen}] focus:border-transparent text-gray-800"
                />
              </label>

              {error && <p className="text-red-600 text-sm text-center mt-4">{error}</p>}
              <button
                type="submit"
                disabled={isSubmitting || !donationOrigin}
                className={`w-full py-3 rounded-lg text-white font-semibold text-lg transition-all duration-300 transform
                  ${isSubmitting || !donationOrigin
                    ? `bg-gray-400 cursor-not-allowed`
                    : `bg-gradient-to-r from-[${Colors.ForestGreen}] to-[${Colors.Terracotta}]
                       hover:from-[${Colors.Terracotta}] hover:to-[${Colors.ForestGreen}]
                       shadow-lg hover:shadow-xl hover:-translate-y-1`}
                `}
              >
                {isSubmitting ? 'Submitting Details...' : 'I\'ve Completed My Transfer'}
              </button>
            </form>
          </div>
          <p className="text-xs text-gray-500 mt-6 text-center">
            After your bank transfer, please click "I've Completed My Transfer". We will verify your details and send a confirmation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DonateModal;

/*
  For the 'bg-texture-pattern' utility, you might need to add this to your global CSS or Tailwind config:
  (This is a simple placeholder for a subtle pattern)
  @layer utilities {
    .bg-texture-pattern {
      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 14v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-30 0v-4H0v4h-4v2h4v4h2v-4h4v-2h-4zm0 30v-4H0v4h-4v2h4v4h2v-4h4v-2h-4zm0-14v-4H0v4h-4v2h4v4h2v-4h4v-2h-4zM14 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 14v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm30 14v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 14v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
  }
*/