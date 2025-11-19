// ...existing code...
const jwt = require("jsonwebtoken");

const secretKey = "yourSecretKey"; // Replace with your secret key

// Function to create and sign a JWT
function createJWT() {
  const payload = {
    userId: 123,
    username: "exampleUser",
  };

  // Sign the JWT with the payload and secret key
  const token = jwt.sign(payload, secretKey);

  console.log("JWT Token:", token);
  return token;
}

// Call the function to create and sign a JWT and keep the token
const generatedToken = createJWT();

// Function to verify a JWT
function verifyJWT(token) {
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error("JWT Verification Failed:", err.message);
    } else {
      console.log("JWT Verified. Decoded:", decoded);
    }
  });
}

// Call the function to verify the generated token
verifyJWT(generatedToken);

// Function to decode a JWT
function decodeJWT(token) {
  const decoded = jwt.decode(token);
  console.log("Decoded JWT:", decoded);
}

// Call the function to decode the generated token
decodeJWT(generatedToken);
