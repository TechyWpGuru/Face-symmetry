// Function to clean and parse the JSON string
function cleanAndParseJson(jsonStr) {
  // Remove the initial 'result =' part
  jsonStr = jsonStr.replace(/^result\s*=\s*/, '');
  
  // Replace unquoted keys with quoted keys
  jsonStr = jsonStr.replace(/(\w+):/g, '"$1":');
  
  // Replace percentage values with quoted percentage values
  jsonStr = jsonStr.replace(/(\d+)%/g, '"$1%"');
  
  // Replace single quotes with double quotes
  jsonStr = jsonStr.replace(/'/g, '"');

  // Parse the cleaned JSON string
  return JSON.parse(jsonStr);
}

// Clean and parse the JSON string
resultString = {
  "shapes": {
    "Oblong": 90%,
    "Heart": 0%,
    "Square": 0%,
    "Oval": 10%,
    "Round": 0%
  },
  "description": "The face is oblong in shape. It is longer than it is wide, with a straight hairline and a strong chin. The cheekbones are not very pronounced, and the face is widest at the temples. The eyes are almond-shaped and the nose is wide and flat. The lips are full and the mouth is wide."
}

const result = cleanAndParseJson(resultString);

console.log(result);








