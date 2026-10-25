// src/components/ChatbotModal.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSend } from 'react-icons/fi';
import navajeevanlogo from '../assets/images/Navajeevan.png';

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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] flex flex-col overflow-hidden bg-ivory shadow-lift sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[min(620px,78vh)] sm:w-[380px] sm:rounded-3xl sm:border sm:border-line"
          role="dialog"
          aria-label="Navajeevan assistant"
        >
          {/* Header */}
          <div className="flex items-center gap-3 bg-ink-900 px-5 py-4 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-0.5">
              <img src={navajeevanlogo} alt="" className="h-full w-full object-contain" />
            </span>
            <div className="flex-1">
              <h3 className="font-sans text-sm font-bold">Navajeevan Assistant</h3>
              <p className="flex items-center gap-1.5 text-xs text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Usually replies instantly
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              aria-label="Close chatbot"
            >
              <FiX />
            </button>
          </div>

          {/* Chat Messages Display Area */}
          <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-5">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'self-end rounded-br-md bg-ink-900 text-white'
                    : 'self-start rounded-bl-md border border-line bg-white text-ink-900'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isSending && (
              <div className="flex gap-1 self-start rounded-2xl rounded-bl-md border border-line bg-white px-4 py-3">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted" style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input Form */}
          <form onSubmit={handleSendMessage} className="flex gap-2 border-t border-line bg-white p-3">
            <input
              type="text"
              className="field !rounded-full !py-2.5"
              placeholder={isSending ? 'Sending…' : 'Ask us anything…'}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              disabled={isSending}
            />
            <button
              type="submit"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-marigold-500 text-ink-950 transition hover:bg-marigold-400 disabled:opacity-60"
              disabled={isSending}
              aria-label="Send message"
            >
              <FiSend size={18} />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatbotModal;
