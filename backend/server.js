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
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
