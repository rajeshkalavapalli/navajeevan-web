# app.py
# This is the ONLY copy of the code for your Flask backend.
# Ensure NO duplicate code blocks exist in this file.

from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import time
import random
import uuid
import google.generativeai as genai # Essential for Gemini API integration

app = Flask(__name__)
CORS(app) # Enable CORS for frontend to communicate

# --- Mock Razorpay API Keys ---
# In a real app, these would be in environment variables
MOCK_RAZORPAY_KEY_ID = "rzp_test_mockkeyid123"
MOCK_RAZORPAY_KEY_SECRET = "mocksecretkeyabc"

# --- Mock Database / Storage ---
# In a real app, you would use a database like PostgreSQL, MongoDB, or Firestore.
# For this mock, we'll just store in memory.
mock_donations_db = []
mock_orders_db = {} # To store mock orders created

# --- Gemini API Configuration ---
# The key is read from the .env file next to this script (never commit .env).
# See .env.example for the format.
try:
    from dotenv import load_dotenv
    load_dotenv(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".env"))
except ImportError:
    pass  # python-dotenv not installed; fall back to real environment variables

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "YOUR_GEMINI_API_KEY")

# Configure the Gemini API client with your key
genai.configure(api_key=GEMINI_API_KEY)

# Initialize the generative model
model = genai.GenerativeModel('gemini-2.0-flash') # Using gemini-2.0-flash as requested, as it's efficient for chat.

@app.route('/')
def home():
    return "Mock Donation and Chatbot Backend is running!"

@app.route('/create-razorpay-order', methods=['POST'])
def create_razorpay_order():
    """
    Simulates creating a Razorpay order.
    In a real app, this would call Razorpay's API.
    """
    data = request.get_json()
    full_name = data.get('fullName')
    email = data.get('email')
    amount = data.get('amount') # Amount in your currency (e.g., INR)
    currency = data.get('currency', 'INR')

    if not all([full_name, email, amount, currency]):
        return jsonify({"success": False, "message": "Missing required fields."}), 400

    if not isinstance(amount, (int, float)) or amount <= 0:
        return jsonify({"success": False, "message": "Invalid amount."}), 400

    # Simulate network delay
    time.sleep(1.5)

    # Simulate potential failures in order creation
    if random.random() < 0.1: # 10% chance of failure
        return jsonify({"success": False, "message": "Simulated Razorpay order creation failed."}), 500

    # Razorpay expects amount in paisa (smallest unit)
    amount_in_paisa = int(float(amount) * 100)
    mock_order_id = f"order_mock_{uuid.uuid4().hex}"

    # Store mock order details
    mock_orders_db[mock_order_id] = {
        "amount": amount_in_paisa,
        "currency": currency,
        "status": "created",
        "full_name": full_name,
        "email": email,
        "created_at": time.time()
    }

    print(f"Mock Order Created: {mock_order_id} for {amount} {currency} by {full_name}")

    return jsonify({
        "success": True,
        "orderId": mock_order_id,
        "amount": amount_in_paisa,
        "currency": currency,
        "key_id": MOCK_RAZORPAY_KEY_ID # Send mock key ID to frontend for Razorpay checkout
    }), 200

@app.route('/verify-payment', methods=['POST'])
def verify_payment():
    """
    Simulates payment verification after Razorpay handler.
    In a real app, this would verify Razorpay signature and fetch payment details.
    """
    data = request.get_json()
    razorpay_payment_id = data.get('razorpay_payment_id')
    razorpay_order_id = data.get('razorpay_order_id')
    razorpay_signature = data.get('razorpay_signature') # In real app, this would be used for signature verification
    full_name = data.get('fullName')
    email = data.get('email')
    donation_amount = data.get('donationAmount')

    if not all([razorpay_payment_id, razorpay_order_id, razorpay_signature, full_name, email, donation_amount]):
        return jsonify({"success": False, "message": "Missing required verification data."}), 400

    # Simulate network delay
    time.sleep(1)

    # Simulate payment verification logic
    if random.random() < 0.05: # 5% chance of verification failure
        print(f"Simulated payment verification FAILED for order: {razorpay_order_id}")
        return jsonify({"success": False, "message": "Simulated payment verification failed."}), 400

    # Update mock order status
    if razorpay_order_id in mock_orders_db:
        mock_orders_db[razorpay_order_id]["status"] = "captured"
        mock_orders_db[razorpay_order_id]["payment_id"] = razorpay_payment_id
        mock_orders_db[razorpay_order_id]["verified_at"] = time.time()
        print(f"Mock Order {razorpay_order_id} CAPTURED successfully.")
    else:
        print(f"Warning: Mock Order {razorpay_order_id} not found during verification.")

    # Record the donation in our mock DB
    mock_donations_db.append({
        "type": "online_razorpay_mock",
        "payment_id": razorpay_payment_id,
        "order_id": razorpay_order_id,
        "full_name": full_name,
        "email": email,
        "amount": donation_amount,
        "currency": "INR",
        "timestamp": time.strftime("%Y-%m-%d %H:%M:%S")
    })

    print(f"Donation Recorded: {full_name}, {donation_amount} INR via Mock Razorpay.")
    print("Mock Donations List:", mock_donations_db)

    return jsonify({"success": True, "message": "Payment verified successfully."}), 200

@app.route('/confirm-manual-transfer', methods=['POST'])
def confirm_manual_transfer():
    """
    Simulates confirmation of a manual bank transfer (FCRA).
    """
    data = request.get_json()
    full_name = data.get('fullName')
    email = data.get('email')
    donation_amount = data.get('donationAmount')
    origin = data.get('origin')

    if not all([full_name, email, donation_amount, origin == 'outside']):
        return jsonify({"success": False, "message": "Missing required fields for manual transfer."}), 400

    # Simulate network delay for sending email etc.
    time.sleep(2)

    # Record the donation in our mock DB
    mock_donations_db.append({
        "type": "manual_transfer_fcra",
        "full_name": full_name,
        "email": email,
        "amount": donation_amount,
        "currency": "FOREIGN_CURRENCY",
        "timestamp": time.strftime("%Y-%m-%d %H:%M:%S")
    })

    print(f"Manual Transfer Confirmation Recorded: {full_name}, {donation_amount} (FCRA).")
    print("Mock Donations List:", mock_donations_db)

    return jsonify({"success": True, "message": "Manual transfer confirmation received."}), 200

# VVV CHATBOT ENDPOINT VVV
@app.route('/chatbot', methods=['POST'])
def chatbot_response():
    """
    Handles chatbot messages and calls Gemini API to generate a response.
    """
    user_message = request.get_json().get('message')

    if not user_message:
        return jsonify({"success": False, "message": "No message provided."}), 400

    print(f"Received user message for chatbot: '{user_message}'")

    try:
        # Check if the API key is the placeholder. If it is, this means the user hasn't replaced it.
        if GEMINI_API_KEY == "YOUR_GEMINI_API_KEY": # This check is useful for initial setup
            print("ERROR: Gemini API key is not configured in the backend! Please replace 'YOUR_GEMINI_API_KEY' with your actual key.")
            return jsonify({"success": False, "message": "Gemini API key is not configured in the backend. Please set your API key in app.py."}), 500

        # Construct chat history for the Gemini model.
        # This basic example provides a fixed initial context.
        # For a more advanced chatbot, you'd manage a persistent chat history
        # for each user session to maintain context across turns.
        chat_history = [
            {"role": "user", "parts": [{"text": "Hello, what is Navajeevan Organisation?"}]},
            {"role": "model", "parts": [{"text": "Navajeevan Organisation is a non-profit dedicated to empowering marginalized communities in South India, focusing on land rights, livelihoods, education, and human dignity for over 30 years."}]},
            {"role": "user", "parts": [{"text": user_message}]} # Add the current user message to the history
        ]
        
        # Call the Gemini API to generate content
        # Set a timeout for the API call to prevent indefinite hanging
        response = model.generate_content(chat_history, request_options={'timeout': 120})

        # Extract the text response from the first candidate
        ai_response = response.candidates[0].content.parts[0].text
        print(f"Gemini AI response: '{ai_response}'")

        return jsonify({"success": True, "response": ai_response}), 200

    except Exception as e:
        print(f"Error calling Gemini API: {e}")
        # Provide a user-friendly error message
        return jsonify({"success": False, "message": f"Sorry, I couldn't process that. There was an issue with the AI service. Please try again later. (Error: {str(e)})"}), 500

if __name__ == '__main__':
    # Running the Flask app in debug mode for development.
    # In production, use a production-ready WSGI server like Gunicorn.
    app.run(debug=True)
