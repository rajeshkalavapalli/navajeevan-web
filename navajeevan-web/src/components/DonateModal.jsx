// src/components/DonateModal.jsx
import React, { useState, useEffect } from 'react';
import { Colors } from '../utils/Colors.js'; // Assuming you have a Colors utility

// Ensure Razorpay SDK is loaded.
// You might want to load this script dynamically in a real app,
// but for simplicity, we assume it's available or loaded via index.html.
// <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

const DonateModal = ({ isOpen, onClose }) => {
  const [donationOrigin, setDonationOrigin] = useState('india'); // 'india' or 'outside'
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' }); // type: 'success', 'error', 'info'

  // Define your backend URL (e.g., where your Flask app will run)
  const BACKEND_URL = 'http://127.0.0.1:5000'; // Flask default runs on port 5000

  // Reset form and messages when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setFullName('');
      setEmail('');
      setDonationAmount('');
      setMessage({ text: '', type: '' });
      setDonationOrigin('india'); // Default to India payment
      setIsLoading(false); // Ensure loading is off when modal opens
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Function to handle Razorpay payment initiation (via mock backend)
  const handleRazorpayPayment = async () => {
    setMessage({ text: '', type: '' }); // Clear previous messages
    setIsLoading(true); // Start loading

    if (!fullName || !email || !donationAmount || parseFloat(donationAmount) <= 0) {
      setMessage({ text: 'Please fill in all details and enter a valid amount.', type: 'error' });
      setIsLoading(false); // Stop loading on validation error
      return;
    }

    let rzp = null; // Declare rzp outside try block for wider scope

    try {
      // 1. Call your backend to create a Razorpay order
      const orderResponse = await fetch(`${BACKEND_URL}/create-razorpay-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          amount: parseFloat(donationAmount), // Send amount as number
          currency: 'INR',
        }),
      });

      const orderData = await orderResponse.json();
      console.log('Backend Order Creation Response:', orderData);

      if (!orderResponse.ok || !orderData.success) {
        setMessage({ text: orderData.message || 'Failed to create payment order. Please try again.', type: 'error' });
        return; // Exit function
      }

      // Ensure the Razorpay SDK is loaded
      if (typeof window.Razorpay === 'undefined') {
        setMessage({ text: 'Razorpay SDK not loaded. Please try again or refresh the page.', type: 'error' });
        return; // Exit if SDK not loaded
      }

      // 2. Open Razorpay Checkout using the order_id from your backend
      const options = {
        key: orderData.key_id, // Your mock Razorpay Key ID from backend
        amount: orderData.amount, // Amount in paisa
        currency: orderData.currency,
        name: 'Navajeevan Organisation (Mock)',
        description: 'Simulated Donation for Community Programs',
        order_id: orderData.order_id, // Order ID from your backend
        handler: async function (response) {
          // This function is called after the simulated payment is "successful" on Razorpay popup.
          console.log('Razorpay Payment Success Callback:', response);
          setMessage({ text: 'Payment received. Verifying transaction...', type: 'info' });

          try {
            // 3. Call your backend to verify the payment
            const verificationResponse = await fetch(`${BACKEND_URL}/verify-payment`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                fullName,
                email,
                donationAmount: parseFloat(donationAmount),
              }),
            });

            const verificationData = await verificationResponse.json();
            console.log('Backend Verification Response:', verificationData);

            if (verificationResponse.ok && verificationData.success) {
              setMessage({ text: 'Payment successful! Thank you for your generous support.', type: 'success' });
              // Close modal after a short delay for message to be read
              setTimeout(onClose, 2000);
            } else {
              setMessage({ text: verificationData.message || 'Payment verification failed. Please contact support.', type: 'error' });
              // Keep modal open on verification failure to show error message
            }
          } catch (verifyError) {
            console.error('Error during payment verification:', verifyError);
            setMessage({ text: 'An error occurred during payment verification. Please contact support.', type: 'error' });
          } finally {
            setIsLoading(false); // Ensure loading is off after verification attempt
          }
        },
        prefill: {
          name: fullName,
          email: email,
          contact: '', // Optional: User's contact number
        },
        notes: {
          donor_name: fullName,
          donor_email: email,
        },
        theme: {
          color: Colors.ForestGreen, // Primary color for Razorpay checkout
        },
        modal: {
          ondismiss: function() {
            // This function is called if the user closes the modal or payment fails/cancelled on Razorpay popup
            console.log('Razorpay payment modal dismissed or failed by user.');
            setMessage({ text: 'Payment cancelled or failed. Please try again.', type: 'error' });
            setIsLoading(false); // Crucial: Stop loading animation
            // Also close your custom modal, as the user likely intended to stop the process
            onClose();
          }
        }
      };

      rzp = new window.Razorpay(options); // Assign to rzp variable
      rzp.open();

    } catch (error) {
      console.error('Error initiating Razorpay payment:', error);
      setMessage({ text: 'There was an unexpected error initiating your payment. Please try again.', type: 'error' });
    } finally {
      // This final finally block ensures isLoading is set to false
      // if any error occurs *before* rzp.open() is successfully called
      // or if rzp.open() itself throws an immediate error.
      // For errors within the handler, that handler's finally handles it.
      if (rzp && !rzp.isOpened()) { // Check if Razorpay modal didn't open or is already closed
          setIsLoading(false);
      }
    }
  };

  // Function to handle "I've Completed My Transfer" for FCRA (via mock backend)
  const handleManualTransferConfirmation = async () => {
    setMessage({ text: '', type: '' });
    setIsLoading(true);

    if (!fullName || !email || !donationAmount || parseFloat(donationAmount) <= 0) {
      setMessage({ text: 'Please fill in all details and enter a valid amount to confirm your transfer.', type: 'error' });
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/confirm-manual-transfer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          donationAmount: parseFloat(donationAmount),
          origin: 'outside',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setMessage({ text: 'Thank you! Your transfer confirmation has been sent to us. We will verify it shortly.', type: 'success' });
        setTimeout(onClose, 3000); // Close modal after a short delay for message to be read
      } else {
        setMessage({ text: data.message || 'Failed to send confirmation. Please try again or contact us directly.', type: 'error' });
      }
    } catch (error) {
      console.error('Error sending transfer confirmation:', error);
      setMessage({ text: 'Failed to send confirmation due to a network error. Please try again or contact us directly.', type: 'error' });
    } finally {
      setIsLoading(false); // Ensure loading is off after completion or error
    }
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 font-inter">
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-w-lg w-full transform transition-all duration-300 scale-100 opacity-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className={`text-2xl font-bold text-[${Colors.ForestGreen}]`}>Enter Your Donation Details</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Close donation form"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {message.text && (
          <div className={`p-3 rounded-lg text-sm mb-4 ${message.type === 'success' ? 'bg-green-100 text-green-700' : (message.type === 'info' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700')}`}>
            {message.text}
          </div>
        )}

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">I am donating from:</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                className={`form-radio h-5 w-5 text-[${Colors.ForestGreen}]`}
                name="donationOrigin"
                value="india"
                checked={donationOrigin === 'india'}
                onChange={() => setDonationOrigin('india')}
              />
              <span className="ml-2 text-gray-800">₹ Within India (INR)</span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                className={`form-radio h-5 w-5 text-[${Colors.ForestGreen}]`}
                name="donationOrigin"
                value="outside"
                checked={donationOrigin === 'outside'}
                onChange={() => setDonationOrigin('outside')}
              />
              <span className="ml-2 text-gray-800">🌐 Outside India (FCRA)</span>
            </label>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-gray-700 text-sm font-semibold mb-2">Your Full Name:</label>
            <input
              type="text"
              id="fullName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[${Colors.Terracotta}] focus:border-transparent transition-all"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Your Email Address:</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[${Colors.Terracotta}] focus:border-transparent transition-all"
              placeholder="john.doe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="donationAmount" className="block text-gray-700 text-sm font-semibold mb-2">Donation Amount (₹ / Other Currency):</label>
            <input
              type="number"
              id="donationAmount"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[${Colors.Terracotta}] focus:border-transparent transition-all"
              placeholder={donationOrigin === 'india' ? 'e.g., 5000' : 'e.g., 100 (USD)'}
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              min="1"
              required
            />
          </div>

          {donationOrigin === 'india' ? (
            <button
              onClick={handleRazorpayPayment}
              className={`w-full bg-[${Colors.ForestGreen}] text-[${Colors.CreamyWhite}] py-3 rounded-md text-lg font-semibold
                         hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[${Colors.ForestGreen}] focus:ring-offset-2
                         ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Donate Now (via Razorpay Mock)'}
            </button>
          ) : (
            <>
              <div className="bg-light-gray p-4 rounded-lg border border-gray-200 mt-6">
                <h4 className="text-md font-bold text-dark-text mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[${Colors.ForestGreen}]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2m7-7a4 4 0 100-8 4 4 0 000 8z" />
                  </svg>
                  FCRA (Foreign) Account Details:
                </h4>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Bank Name:</span> Axis Bank<br />
                  <span className="font-semibold">Account Name:</span> Navajeevan Organisation (FCRA)<br />
                  <span className="font-semibold">Account Number:</span> [YOUR FCRA ACCOUNT NUMBER]<br />
                  <span className="font-semibold">IFSC Code:</span> [YOUR FCRA IFSC CODE]<br />
                  <span className="font-semibold">SWIFT Code:</span> [YOUR FCRA SWIFT CODE]
                </p>
                {/* Manual copy button for bank details */}
                <button
                  onClick={() => {
                    const textToCopy = `Bank Name: Axis Bank\nAccount Name: Navajeevan Organisation (FCRA)\nAccount Number: [YOUR FCRA ACCOUNT NUMBER]\nIFSC Code: [YOUR FCRA IFSC CODE]\nSWIFT Code: [YOUR FCRA SWIFT CODE]`;
                    const textarea = document.createElement('textarea');
                    textarea.value = textToCopy;
                    document.body.appendChild(textarea);
                    textarea.select();
                    try {
                      document.execCommand('copy');
                      setMessage({ text: 'Bank details copied to clipboard!', type: 'success' });
                    } catch (err) {
                      console.error('Failed to copy text: ', err);
                      setMessage({ text: 'Failed to copy bank details. Please copy manually.', type: 'error' });
                    }
                    document.body.removeChild(textarea);
                  }}
                  className={`mt-4 px-4 py-2 bg-[${Colors.Terracotta}] text-creamy-white rounded-md text-sm font-semibold hover:opacity-90 transition-all`}
                >
                  Copy Details
                </button>
              </div>

              <button
                onClick={handleManualTransferConfirmation}
                className={`w-full bg-gray-700 text-white py-3 rounded-md text-lg font-semibold
                           hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2
                           ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Sending Confirmation...' : "I've Completed My Transfer"}
              </button>
            </>
          )}
        </form>

        <p className="text-xs text-gray-600 text-center mt-6">
          After your bank transfer or online payment, please click the respective button. We will verify your details and send a confirmation.
        </p>
      </div>
    </div>
  );
};

export default DonateModal;
