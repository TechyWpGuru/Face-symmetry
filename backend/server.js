const express = require("express");
const { VertexAI } = require("@google-cloud/vertexai");
const Cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(Cors());
// Increase the payload size limit
app.use(bodyParser.json({ limit: "10mb" })); // Adjust the limit as needed
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
const createNonStreamingMultipartContent = require("./utils/vertex");

app.post("/api/analyze-image", async (req, res) => {
  const { image } = req.body;

  try {
    imageUrl = `data:image/jpeg;base64,${image}`;
    const vertexResponse = await createNonStreamingMultipartContent(
      "groovy-pager-423612-u5",
      "us-central1",
      "gemini-1.0-pro-vision-001",
      image,
      "image/jpeg"
    );
    res.status(200).send(vertexResponse);
  } catch (error) {
    console.error("Error processing the request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const fs = require("fs");

const jsonData = {
  type: "service_account",
  project_id: "groovy-pager-423612-u5",
  private_key_id: "938ae09a7eeaeaccd8d76600b59a489520157621",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCv/DRBtxv0xPw3\nzjbg/GHrIYdBA/iWxIUtQsUUclG76yGaB53d2v0K4JP8gIS0WIogcO1tH+AvE/L5\n4qVLPriEW3TQloLBoKclqYmGJR7873GVOwpLEKZAu/WFeRX+3+cxUkf25adXu4ur\ngyTx7WqtKU4aSue0W8H6LaUQrPnw1pJYYM/9qRubfw9xXqkdDjv4lqNP1T4BC3zO\nrRihFTPcrqBXhzkDY27hwrDc5VDFfYFFhU8EFl4YD7EGoOEgHvOH5oDxGAb8WBFu\nO/+8Nh2/HZifn5qncNd6IEU3ABmk6aHPnoyxiDvpIMKQaxFlft8YuZ1zbje47hmY\nfp7G5ZbPAgMBAAECggEAFxpRU+UxbtcjU0Inky6evirnIiJe0pAW+aOf0rjVQQmz\nnhBs6ZCTkod79fR7N1++NlcM3DwIhrWkOqjF0VR5Dash8TYpETlBaCDTFICwCj12\n2EPpbIRRhwMFztFgEVccdy2Zk/B/IPXWdpwfUAE+dWAMSEhYFaXMF8dBOaizoSmZ\nud/jxSAWFBJ3QH7vAkU44F5Xg4uK5sEdVUit3359w8+BZ6R4yfMELUSu9s0Vy+rs\n3QjZbdDIZFGqC4LZMZxiy6byg9gkx+mWLESGkzYXeSsQL8TTQUe158yBXfpxzhPD\nM5wbIo3itGUcfZvgycdfsvruPpDaBJJQIoX5PHDnlQKBgQD1PhlsyP+FO54uWW6k\nSvIVmq3exkb0QZEemjINpZCgly9YTQ1UKiw5+vi3+ai/vwnBthr9fDpeU/ItVe49\nWONNf9l9EDxJ150w3wTwBEPfxAt4zYrvGSm4U3KTUwzkxyEmYF8RVGjcupw4N+ty\n68WhfQsNG926eP2pyi2QqwkxOwKBgQC3tGSlyGbmTrkhoktaSW/VFmLEoUTl7MPg\nPSOaKPVTTav/TLNHdcOl51+TOqBkinhOrz9HSjrSunVAhvgY9Ln+E4tG5MBno83X\n+rcWoS2wEeCOZX0BqiE81O2p9gv/yDz+6YxRWC67lBugY0np6luKsZP0tPaqpNCX\npzcC8DDXfQKBgQDtMnnu4N1bZNVSqQc9eot439mJXack+gG9YpBE6Lzgxjlxo1zf\n6cZK8fX8I0nW45QxOswSHkRqFbFnrfQ2e7GltKGLt9dH6HZN3XbuGoH3fKtH1S2q\nomDaukNYQPx4jiz+7DknDsg5rXgJW/Sre2T0E3hL3obvo7Rcs4KsqPDEHwKBgQCq\nbeimSWr1pflpc8kWxWTEO1V8eOWTrnn20qHyBqe7FidI3l7BIEdX5nUsAUsGm9SL\no1hAimRSVnwrVkxb0sevKXCgX98FB9oT0t0DWJsraxp64Tr9TVoytpSbhtKRBbNZ\nB1GPshEBI6IRxauwISW2YZMThsQFgoym9ZI63p1hfQKBgQCs4o56+TCC4sZLiqm3\n5vbb2ZC0YCXU7qdHHA8XZ+h/ElR1KEHXxdJsOKCcmBpGwgAniETojVXx0TMbk3oR\nguPodKCYDnrO+biZYzTg+W6phLS1I++9+VXkGh4fedGJ6GTWnGta9jjhtgrHqVz2\npg3qTW2A6rmHD09zFis0IkY6Gw==\n-----END PRIVATE KEY-----\n",
  client_email:
    "onyenike-chukwudi@groovy-pager-423612-u5.iam.gserviceaccount.com",
  client_id: "112908834708047259634",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/onyenike-chukwudi%40groovy-pager-423612-u5.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

// Convert JSON data to string format
const jsonString = JSON.stringify(jsonData, null, 2);

// Write JSON data to file
fs.writeFileSync("config/env.json", jsonString);

console.log("env.json file created successfully.");


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
