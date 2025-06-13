// src/components/ChatbotModal.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Colors } from '../utils/Colors.js'; // Assuming you have a Colors utility
import { FiSend } from 'react-icons/fi'; // For the send icon

const ChatbotModal = ({ isOpen, onClose }) => {
  // messages state stores the chat history: [{ role: 'user' | 'model', text: '...' }]
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isSending, setIsSending] = useState(false); // State to manage sending/loading status
  const messagesEndRef = useRef(null); // Ref for auto-scrolling to bottom of chat

  // Define your backend URL. Ensure this matches where your Flask app is running.
  const BACKEND_URL = 'http://127.0.0.1:5000'; // Default Flask development server port

  // Effect to scroll to the bottom of the chat window whenever new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Effect to add an initial greeting message from the chatbot when the modal opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'model', text: "Hello! How can I assist you today regarding Navajeevan Organisation?" }]);
    }
  }, [isOpen, messages.length]); // Dependencies: only run when modal opens or messages become empty

  // If the modal is not open, don't render anything
  if (!isOpen) return null;

  // Function to handle sending a message to the backend chatbot endpoint
  const handleSendMessage = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)

    // Basic validation: Don't send empty messages or if a message is already being sent
    if (inputMessage.trim() === '' || isSending) return;

    const userMessage = inputMessage.trim(); // Get the user's message
    // Add user's message to the chat history
    setMessages((prevMessages) => [...prevMessages, { role: 'user', text: userMessage }]);
    setInputMessage(''); // Clear the input field immediately
    setIsSending(true); // Set sending state to true to disable input and show loading

    try {
      // Make a POST request to your Flask backend's /chatbot endpoint
      const response = await fetch(`${BACKEND_URL}/chatbot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }), // Send the user's message in JSON format
      });

      const data = await response.json(); // Parse the JSON response from the backend
      console.log('Chatbot Backend Response:', data); // Log the response for debugging

      // Check if the backend request was successful and contains a response
      if (response.ok && data.success) {
        setMessages((prevMessages) => [...prevMessages, { role: 'model', text: data.response }]);
      } else {
        // If there was an error from the backend, display a fallback message
        setMessages((prevMessages) => [...prevMessages, { role: 'model', text: data.message || 'Sorry, I am having trouble understanding that right now. Please try again later.' }]);
      }
    } catch (error) {
      // Catch network errors or other unexpected issues during the fetch call
      console.error('Error communicating with chatbot backend:', error);
      setMessages((prevMessages) => [...prevMessages, { role: 'model', text: 'It seems there was a network error. Please check your connection or try again later.' }]);
    } finally {
      setIsSending(false); // Always reset sending state after the attempt (success or failure)
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 font-inter">
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-w-sm w-full h-[80vh] flex flex-col transform transition-all duration-300 scale-100 opacity-100">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className={`text-xl font-bold text-[${Colors.ForestGreen}]`}>Navajeevan Chatbot</h3>
          <button
            onClick={onClose} // Call the onClose prop when the close button is clicked
            className="text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Close chatbot"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chat Messages Display Area */}
        <div className="flex-grow overflow-y-auto p-2 border border-gray-200 rounded-lg mb-4 bg-gray-50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded-lg max-w-[85%] ${
                msg.role === 'user' // Style messages differently based on sender
                  ? 'bg-blue-500 text-white self-end ml-auto' // User messages aligned right
                  : 'bg-gray-200 text-gray-800 self-start mr-auto' // Model messages aligned left
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} /> {/* Invisible div for auto-scrolling */}
        </div>

        {/* Message Input Form */}
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-[${Colors.ForestGreen}] focus:border-transparent transition-all"
            placeholder={isSending ? 'Sending...' : 'Type your message...'} // Dynamic placeholder
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            disabled={isSending} // Disable input while sending
          />
          <button
            type="submit"
            className={`p-3 rounded-full bg-[${Colors.ForestGreen}] text-white flex-shrink-0
                        hover:bg-opacity-90 transition-all duration-300
                        ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={isSending} // Disable button while sending
            aria-label="Send message"
          >
            <FiSend size={20} /> {/* Send icon */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatbotModal;
