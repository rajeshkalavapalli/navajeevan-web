// src/components/DonateModal.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiLock, FiCopy, FiGlobe, FiHeart } from 'react-icons/fi';

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

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const presetAmounts = donationOrigin === 'india' ? [1000, 2500, 5000, 10000] : [50, 100, 250, 500];
  const currencySymbol = donationOrigin === 'india' ? '₹' : '$';


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
          color: '#0C2445', // Primary color for Razorpay checkout
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
      // Once the checkout is open, its handler / ondismiss callbacks reset loading instead.
      if (!rzp) {
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




  const fcraDetails = `Bank Name: Axis Bank\nAccount Name: Navajeevan Organisation (FCRA)\nAccount Number: [YOUR FCRA ACCOUNT NUMBER]\nIFSC Code: [YOUR FCRA IFSC CODE]\nSWIFT Code: [YOUR FCRA SWIFT CODE]`;

  const copyBankDetails = async () => {
    try {
      await navigator.clipboard.writeText(fcraDetails);
      setMessage({ text: 'Bank details copied to clipboard!', type: 'success' });
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setMessage({ text: 'Failed to copy bank details. Please copy manually.', type: 'error' });
    }
  };

  const messageStyles = {
    success: 'border-emerald-200 bg-emerald-50 text-emerald-800',
    info: 'border-brand-200 bg-brand-50 text-brand-700',
    error: 'border-red-200 bg-red-50 text-red-700',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-ink-950/70 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="donate-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="no-scrollbar relative max-h-[94svh] w-full max-w-lg overflow-y-auto rounded-t-[2rem] bg-ivory shadow-lift sm:rounded-[2rem]"
          >
            {/* Header */}
            <div className="relative overflow-hidden bg-ink-900 px-6 pb-5 pt-5 text-white sm:px-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-marigold-500/30 blur-3xl" />
              <button
                onClick={onClose}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                aria-label="Close donation form"
              >
                <FiX />
              </button>
              <span className="eyebrow eyebrow-light">Give with confidence</span>
              <h3 id="donate-title" className="mt-2 font-display text-2xl font-light">Support a new beginning</h3>

              {/* Origin toggle */}
              <div className="relative mt-4 grid grid-cols-2 rounded-full bg-white/10 p-1 text-sm font-bold">
                {[
                  { id: 'india', label: '₹ Within India' },
                  { id: 'outside', label: 'Outside India (FCRA)' },
                ].map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => { setDonationOrigin(o.id); setDonationAmount(''); }}
                    className="relative z-10 rounded-full px-3 py-2 transition"
                  >
                    {donationOrigin === o.id && (
                      <motion.span layoutId="origin-pill" className="absolute inset-0 -z-10 rounded-full bg-white" />
                    )}
                    <span className={donationOrigin === o.id ? 'text-ink-900' : 'text-white/70'}>{o.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="px-6 py-5 sm:px-8">
              {message.text && (
                <div className={`mb-4 rounded-xl border px-4 py-2.5 text-sm font-medium ${messageStyles[message.type] || messageStyles.error}`}>
                  {message.text}
                </div>
              )}

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <span className="label">Choose an amount</span>
                  <div className="grid grid-cols-4 gap-2">
                    {presetAmounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setDonationAmount(String(amt))}
                        className={`rounded-xl border py-2.5 text-sm font-bold transition ${
                          String(amt) === donationAmount
                            ? 'border-ink-900 bg-ink-900 text-white'
                            : 'border-line bg-white text-ink-900 hover:border-ink-900/40'
                        }`}
                      >
                        {currencySymbol}{amt.toLocaleString('en-IN')}
                      </button>
                    ))}
                  </div>
                  <div className="relative mt-2">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-muted">{currencySymbol}</span>
                    <input
                      type="number"
                      id="donationAmount"
                      className="field !py-2.5 !pl-9"
                      placeholder="Or enter a custom amount"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                      min="1"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="label">Full name</label>
                    <input
                      type="text"
                      id="fullName"
                      className="field !py-2.5"
                      placeholder="Your name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="label">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="field !py-2.5"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                {donationOrigin === 'india' ? (
                  <button onClick={handleRazorpayPayment} className="btn-primary w-full !py-3.5 text-base" disabled={isLoading}>
                    {isLoading ? 'Processing…' : (<><FiHeart /> Donate {donationAmount ? `₹${Number(donationAmount).toLocaleString('en-IN')}` : 'Now'}</>)}
                  </button>
                ) : (
                  <>
                    <div className="rounded-2xl border border-line bg-white p-4">
                      <h4 className="flex items-center gap-2 font-sans text-sm font-bold text-ink-900">
                        <FiGlobe className="text-brand-500" /> FCRA (Foreign) Account Details
                      </h4>
                      <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
                        {fcraDetails.split('\n').map((row) => {
                          const [k, ...v] = row.split(': ');
                          return (
                            <React.Fragment key={k}>
                              <dt className="text-muted">{k}</dt>
                              <dd className="font-semibold text-ink-900">{v.join(': ')}</dd>
                            </React.Fragment>
                          );
                        })}
                      </dl>
                      <button type="button" onClick={copyBankDetails} className="btn-outline mt-3 !py-1.5 text-xs">
                        <FiCopy /> Copy details
                      </button>
                    </div>

                    <button onClick={handleManualTransferConfirmation} className="btn-dark w-full !py-3.5 text-base" disabled={isLoading}>
                      {isLoading ? 'Sending confirmation…' : "I've completed my transfer"}
                    </button>
                  </>
                )}
              </form>

              <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted">
                <FiLock className="shrink-0 text-ink-700" />
                Secure payment · 80G tax benefit · Receipt sent by email
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DonateModal;
