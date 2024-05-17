const { VertexAI } = require("@google-cloud/vertexai");

module.exports = async function createNonStreamingMultipartContent(
  projectId = "groovy-pager-423612-u5",
  location = "us-central1",
  model = "gemini-1.0-pro-vision-001",
  image,
  mimeType = "image/jpeg"
) {
  // Initialize Vertex with your Cloud project and location
  const vertexAI = new VertexAI({ project: projectId, location: location });

  // Instantiate the model
  const generativeVisionModel = vertexAI.getGenerativeModel({
    model: model,
  });

  const base64Image = image;
  const filePart = {
    inline_data: { data: base64Image, mimeType: "image/jpeg" },
  };
  const textPart = {
    text: 'Analyze the facial symmetry and shape of the person in the image. Identify the face shape categories (Oblong, Heart, Square, Oval, Round) and provide the percentage match for each. provide your response in format like this {"shapes": {"category": "percentageMatch", "category": "percentageMatch"...}, "description" = "a complete analysis of the facial symmetry and shape"}. for example, {shapes: {"Oblong": "80%", "Heart": "20%", "Square": "0%", "Oval": "0%", "Round": "0%"}, description: "The face is oblong in shape. It is longer than it is wide, with a straight hairline and a strong chin. The cheekbones are not very pronounced, and the face is widest at the temples. The eyes are almond-shaped and the nose is wide and flat. The lips are full and the mouth is wide."}. please do not forget to use double qoute for bot the key and value in the response and please dont include backticks in the response. just the response in inside a {}. If no face is detected in the image, please provide a response like this {"shapes": {}, "description": "No face detected in the image"}.',
  };
  const request = {
    contents: [{ role: "user", parts: [textPart, filePart] }],
  };
  const streamingResult = await generativeVisionModel.generateContentStream(
    request
  );
  const contentResponse = await streamingResult.response;
  console.log(contentResponse.candidates[0].content.parts[0].text);
  return contentResponse.candidates[0].content.parts[0].text;
}
