import React, { useState } from 'react';
import { FaTimes, FaHandHoldingHeart, FaGlobe, FaRupeeSign } from 'react-icons/fa';
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
    Yellow: "#FFB823"
};  

function DonateModal({ show, onClose }) {
    const [formData, setFormData] = useState({ name: '', email: '', amount: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [donationOrigin, setDonationOrigin] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (error) setError(null);
        if (showSuccessMessage) setShowSuccessMessage(false);
    };

    const handleDonationOriginChange = (e) => {
        setDonationOrigin(e.target.value);
        if (error) setError(null);
        if (showSuccessMessage) setShowSuccessMessage(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Client-side validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.amount.trim()) {
            setError('Please fill in all required form fields (Name, Email, Amount).');
            return;
        }
        if (!donationOrigin) {
            setError('Please select if you are donating from India or Outside India.');
            return;
        }

        setIsSubmitting(true);
        setError(null);
        setShowSuccessMessage(false);

        try {
            // Simulate API call to backend
            const response = await fetch('http://localhost:5000/api/donate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, donationOrigin }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }

            setShowSuccessMessage(true);
            setFormData({ name: '', email: '', amount: '' });
            setDonationOrigin(null);

            setTimeout(() => {
                onClose();
                setShowSuccessMessage(false);
            }, 5000);

        } catch (err) {
            console.error('Donation submission error:', err);
            setError(`Submission failed: ${err.message || 'Please check your internet connection or try again later.'}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center p-4 font-inter">
            {/* Added max-h-[90vh] and overflow-y-auto to allow scrolling within the modal */}
            <div className={`bg-white rounded-2xl shadow-2xl max-w-5xl w-full flex flex-col lg:flex-row relative max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100`}>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-3xl font-light leading-none bg-white rounded-full p-2"
                    aria-label="Close modal"
                >
                    <FaTimes />
                </button>

                {/* Left Column: Inspirational Message & Bank Details (Conditional) */}
                {/* Ensure the background gradient is correctly applied and text colors are explicitly white/CreamyWhite */}
                <div className={`lg:w-2/5 p-6 md:p-8 flex flex-col justify-center items-center text-center lg:items-start lg:text-left
                                 bg-gradient-to-br from-[${Colors.DarkForestGreen}] to-[${Colors.ForestGreen}] relative overflow-hidden`}>
                    {/* The texture pattern layer */}
                    <div className="absolute inset-0 opacity-10 bg-texture-pattern z-0"></div>
                    
                    {/* Explicitly set all text in this div and its children to CreamyWhite/white */}
                    <div className="relative z-10 w-full text-[${Colors.Yellow}]">
                        <FaHandHoldingHeart className="text-6xl text-[#B6F500] mb-4 mx-auto lg:mx-0 animate-pulse-slow" />
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight text-[#B6F500]"> {/* Explicitly set text color */}
                            Your Contribution Fuels Hope
                        </h2>
                        <p className="text-base mb-6 leading-relaxed text-[#FFB823]"> {/* Explicitly set text color */}
                            Every donation, big or small, directly supports our programs in education, health, and livelihood for needy vulnerable communities.
                            Thank you for being a part of the change!
                        </p>

                        {/* Bank Details Section - Conditionally rendered */}
                        {/* Ensure text inside these divs is explicitly white */}
                        {donationOrigin === 'india' && (
                            <div className={`bg-white bg-opacity-15 backdrop-blur-sm p-5 rounded-lg border border-[rgba(255,255,255,0.2)] mt-6 text-left`}>
                                <h3 className={`text-lg font-semibold mb-2 flex items-center justify-start text-[#E83F25]`}>
                                    <FaBuildingColumns className="mr-2 text-[${Colors.Terracotta}]" /> Indian (INR) Account Details:
                                </h3>
                                <div className={`space-y-1.5 text-sm text-[${Colors.CreamyWhite}]`}>
                                    <p><strong>Bank Name:</strong> AXIS Bank</p>
                                    <p><strong>Account Name:</strong> Navajeevan Organisation</p>
                                    <p><strong>Account Number:</strong> 152010100063081</p>
                                    <p><strong>IFSC Code:</strong> UTIB0000152</p>
                                </div>
                            </div>
                        )}

                        {donationOrigin === 'foreign' && (
                            <div className={`bg-white bg-opacity-15 backdrop-blur-sm p-5 rounded-lg border border-[rgba(255,255,255,0.2)] mt-6 text-left`}>
                                <h3 className={`text-lg font-semibold mb-2 flex items-center justify-start text-[#E83F25]`}>
                                    <FaBuildingColumns className="mr-2 text-[${Colors.Terracotta}]" /> FCRA (Foreign) Account Details:
                                </h3>
                                <div className={`space-y-1.5 text-sm text-[${Colors.CreamyWhite}]`}>
                                    <p><strong>Bank Name:</strong> ANDHRA BANK,VENKATAGIRI,</p>
                                    <p><strong>Account Name:</strong> Navajeevan Organisation (FCRA)</p>
                                    <p><strong>Account Number:</strong> 060210011011953</p>
                                    <p><strong>IFSC Code:</strong> ANDB0000602</p>
                                    <p><strong>SWIFT Code:</strong> [YOUR FCRA SWIFT CODE]</p>
                                </div>
                            </div>
                        )}

                        {/* Ensure these paragraphs are also explicitly colored to show against a dark background */}
                        {!donationOrigin && (
                            <p className="text-sm text-[${Colors.StoneBeige}] mt-4">
                                Please select your donation origin on the right to see bank details.
                            </p>
                        )}

                        <p className="text-sm text-[${Colors.StoneBeige}] mt-4">
                            *Please ensure details are correct for a successful transfer.
                        </p>
                    </div>
                </div>

                {/* Right Column: Donation Form */}
                <div className="lg:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                        <h2 className={`text-2xl md:text-3xl font-extrabold text-[${Colors.ForestGreen}] mb-4 text-center`}>
                            Enter Your Donation Details
                        </h2>
                        <p className="text-sm text-[#E83F25] mb-5 text-center">
                            Please select your donation origin and fill out the form below.
                        </p>

                        {/* Donation Origin Selection */}
                        <div className="mb-5">
                            <span className="text-gray-700 text-sm font-medium mb-2 block">I am donating from:</span>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <label className={`flex-1 flex items-center p-2.5 border rounded-lg cursor-pointer transition-all duration-200
                                                 ${donationOrigin === 'india' ? `border-[${Colors.ForestGreen}] ring-2 ring-[${Colors.ForestGreen}] bg-blue-50` : 'border-gray-300 hover:border-gray-400 bg-white'}`}>
                                    <input
                                        type="radio"
                                        name="donationOrigin"
                                        value="india"
                                        checked={donationOrigin === 'india'}
                                        onChange={handleDonationOriginChange}
                                        className="mr-2 h-4 w-4 text-[${Colors.ForestGreen}] focus:ring-[${Colors.ForestGreen}]"
                                    />
                                    <FaRupeeSign className="text-base mr-1.5 text-[${Colors.ForestGreen}]" />
                                    <span className="font-medium text-gray-800 text-sm">Within India (INR)</span>
                                </label>
                                <label className={`flex-1 flex items-center p-2.5 border rounded-lg cursor-pointer transition-all duration-200
                                                 ${donationOrigin === 'foreign' ? `border-[${Colors.ForestGreen}] ring-2 ring-[${Colors.ForestGreen}] bg-blue-50` : 'border-gray-300 hover:border-gray-400 bg-white'}`}>
                                    <input
                                        type="radio"
                                        name="donationOrigin"
                                        value="foreign"
                                        checked={donationOrigin === 'foreign'}
                                        onChange={handleDonationOriginChange}
                                        className="mr-2 h-4 w-4 text-[${Colors.ForestGreen}] focus:ring-[${Colors.ForestGreen}]"
                                    />
                                    <FaGlobe className="text-base mr-1.5 text-[${Colors.ForestGreen}]" />
                                    <span className="font-medium text-gray-800 text-sm">Outside India (FCRA)</span>
                                </label>
                            </div>
                            {error && !showSuccessMessage && <p className="text-red-600 text-sm text-center mt-2">{error}</p>}
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <label className="block">
                                <span className="text-gray-700 text-sm font-medium mb-1 block">Your Full Name:</span>
                                <input
                                    name="name"
                                    placeholder="John Doe"
                                    type="text"
                                    value={formData.name}
                                    required
                                    onChange={handleChange}
                                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[${Colors.ForestGreen}] focus:border-transparent text-gray-800 text-sm"
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
                                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[${Colors.ForestGreen}] focus:border-transparent text-gray-800 text-sm"
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
                                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[${Colors.ForestGreen}] focus:border-transparent text-gray-800 text-sm"
                                />
                            </label>
                            
                            {/* Consolidated error and success messages here */}
                            {error && !showSuccessMessage && <p className="text-red-600 text-sm text-center mt-4">{error}</p>}
                            {showSuccessMessage && (
                                <div className="bg-green-100 text-green-800 border border-green-200 p-3 rounded-lg text-center mt-4">
                                   Thank you for your donation! ❤️ ! Your details have been recorded. Please proceed with the bank transfer using the details provided below. We will contact you based on your provided information to confirm the donation.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting || !donationOrigin}
                                className={`w-full py-2.5 rounded-lg text-white font-semibold text-base transition-all duration-300 transform
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
                    {/* Final instruction text */}
                    <p className="text-xs text-gray-500 mt-5 text-center">
                        After your bank transfer, please click "I've Completed My Transfer". We will verify your details and send a confirmation.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DonateModal;
