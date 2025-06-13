# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import time # For simulating delays
import random # For simulating success/failure
import uuid # For generating mock IDs

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


@app.route('/')
def home():
    return "Mock Donation Backend is running!"

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
    # In a real app:
    # 1. Retrieve order from your database using razorpay_order_id.
    # 2. Construct signature string using order_id, payment_id, and your Razorpay Key Secret.
    # 3. Use Razorpay utility to verify signature (e.g., razorpay.utility.verify_payment_signature).
    # 4. If valid, mark order as paid in your DB, send confirmation emails etc.

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
        # This shouldn't happen if frontend passed correct order_id, but good to handle
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
    print("Mock Donations List:", mock_donations_db) # For debugging purposes

    return jsonify({"success": True, "message": "Payment verified successfully."}), 200

@app.route('/confirm-manual-transfer', methods=['POST'])
def confirm_manual_transfer():
    """
    Simulates confirmation of a manual bank transfer (FCRA).
    In a real app, this would send an email notification to your finance team.
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
        "currency": "FOREIGN_CURRENCY", # Or specific currency like USD
        "timestamp": time.strftime("%Y-%m-%d %H:%M:%S")
    })

    print(f"Manual Transfer Confirmation Recorded: {full_name}, {donation_amount} (FCRA).")
    print("Mock Donations List:", mock_donations_db) # For debugging purposes

    # Simulate sending an email to finance team
    # In a real app:
    # import smtplib
    # from email.mime.text import MIMEText
    # msg = MIMEText(f"New FCRA transfer confirmation:\nName: {full_name}\nEmail: {email}\nAmount: {donation_amount}")
    # msg['Subject'] = 'New FCRA Donation Confirmation'
    # msg['From'] = 'your_website@example.com'
    # msg['To'] = 'finance@yourorganization.com'
    # with smtplib.SMTP_SSL('smtp.your-email-provider.com', 465) as server:
    #     server.login('your_email', 'your_password')
    #     server.send_message(msg)

    return jsonify({"success": True, "message": "Manual transfer confirmation received."}), 200

if __name__ == '__main__':
    app.run(debug=True) # debug=True allows auto-reloading and better error messages
