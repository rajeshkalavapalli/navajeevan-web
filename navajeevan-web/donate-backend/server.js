const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/donate', (req, res) => {
  const { name, email, amount } = req.body;
  console.log(`Donation: ${name} | ${email} | ₹${amount}`);
  res.status(200).json({ message: 'Donation received' });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
