import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ShowImage.css";

const FaceShapeDetector = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState("image");
  const [labels, setLabels] = useState("on");
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [apiKey, setApiKey] = useState("");
  const [model, setModel] = useState("");
  const [confidence, setConfidence] = useState("");
  const [overlap, setOverlap] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const retrieveDefaultValuesFromLocalStorage = () => {
      try {
        const apiKeyFromStorage = localStorage.getItem("rf.api_key");
        const modelFromStorage = localStorage.getItem("rf.model");
        const formatFromStorage = localStorage.getItem("rf.format");

        if (apiKeyFromStorage) setApiKey(apiKeyFromStorage);
        if (modelFromStorage) setModel(modelFromStorage);
        if (formatFromStorage) setFormat(formatFromStorage);
      } catch (error) {
        console.error("Error retrieving values from localStorage:", error);
      }
    };

    retrieveDefaultValuesFromLocalStorage();
  }, []);

  //   const handleFileUpload = (event) => {
  //     setFile(event.target.files[0]);
  //     const fileName = event.target.files[0].name;
  //     return fileName;
  //   };

  //   const handleUrlChange = (event) => {
  //     setUrl(event.target.value);
  //   };

  //   const handleFormatChange = (event) => {
  //     const selectedFormat = event.target.value;
  //     setFormat(selectedFormat);
  //     localStorage.setItem("rf.format", selectedFormat);
  // //   };
  //   const handleLabelsChange = (event) => {
  //     const selectedLabels = event.target.value;
  //     setLabels(selectedLabels);
  //   };

  //   const handleStrokeWidthChange = (event) => {
  //     const selectedStrokeWidth = parseInt(event.target.value, 10);
  //     setStrokeWidth(selectedStrokeWidth);
  //   };

  //   const handleApiKeyChange = (event) => {
  //     const newApiKey = event.target.value;
  //     setApiKey(newApiKey);
  //     localStorage.setItem("rf.api_key", newApiKey);
  //   };

  //   const handleModelChange = (event) => {
  //     const newModel = event.target.value;
  //     setModel(newModel);
  //     localStorage.setItem("rf.model", newModel);
  //   };

  //   const handleConfidenceChange = (event) => {
  //     setConfidence(event.target.value);
  //   };

  //   const handleOverlapChange = (event) => {
  //     setOverlap(event.target.value);
  //   };

  const getBase64FromFile = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    });
  };

  const resizeImage = (base64Image) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = base64Image;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = 500;
        let height = 500;
        const originalWidth = img.width;
        const originalHeight = img.height;

        if (originalWidth > originalHeight) {
          if (originalWidth > width) {
            height *= width / originalWidth;
            width = 500;
          }
        } else {
          if (originalHeight > height) {
            width *= height / originalHeight;
            height = 500;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.7));
      };
      img.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const apiUrl = "https://www.detect-face-shape.com/ezais/dynamic?cb=1";
    const queryParams = [];

    if (apiKey) queryParams.push(`api_key=${apiKey}`);
    if (confidence) queryParams.push(`confidence=${confidence}`);
    if (overlap) queryParams.push(`overlap=${overlap}`);
    if (format === "image") {
      if (labels === "on") queryParams.push("labels=on");
      if (strokeWidth) queryParams.push(`stroke=${strokeWidth}`);
    }

    const requestUrl = `${apiUrl}?${queryParams.join("&")}`;

    try {
      let requestData;
      if (file) {
        const base64Image = await getBase64FromFile(file);
        const resizedImage = await resizeImage(base64Image);
        requestData = resizedImage.split(",")[1];
      } else if (url) {
        queryParams.push(`image=${encodeURIComponent(url)}`);
        requestData = null;
      } else {
        setIsLoading(false);
        alert("Please select a file or enter an image URL.");
        return;
      }

      const response = await axios.post(requestUrl, requestData, {
        headers: {
          "Content-Type": "application/octet-stream",
        },
        responseType: format === "json" ? "json" : "arraybuffer",
      });

      if (format === "json") {
        setResult(JSON.stringify(response.data, null, 4));
      } else {
        const blob = new Blob([response.data], { type: "image/jpeg" });
        const imageUrl = URL.createObjectURL(blob);
        setResult(
          <img
            src={imageUrl}
            alt="Inference Result"
            className="inference-image"
          />
        );
      }
    } catch (error) {
      console.error("Error processing the request:", error);
      setResult("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form id="inputForm" onSubmit={handleSubmit}>
      <div className="header">
        <div className="header__grid">
          <img
            className="header__logo"
            src="/face-shape-detector.png"
            alt="Face Shape Detector"
            style={{ width: "400px", height: "120px" }}
          />
        </div>
      </div>

      <div className="content">
        <div className="content__grid">
          <div className="col-12-s6-m4" id="method">
            <label className="input__label">Upload Method</label>
            <div>
              <button
                type="button"
                className={`bttn left fill ${file ? "active" : ""}`}
                onClick={() => setFile(null)}
              >
                Upload
              </button>
              <button
                type="button"
                className={`bttn right fill ${url ? "active" : ""}`}
                onClick={() => setUrl("")}
              >
                URL
              </button>
            </div>
          </div>

          <div
            className="col-12-m8"
            id="fileSelectionContainer"
            style={{ display: file ? "block" : "none" }}
          >
            <label className="input__label" htmlFor="file">
              Select File
            </label>
            <div className="flex">
              <input
                className="input input--left flex-1"
                type="text"
                id="fileName"
                disabled
              />
              <button
                type="button"
                className="bttn right active"
                onClick={() => document.getElementById("file").click()}
              >
                Browse
              </button>
            </div>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              accept="image/*"
              onChange={handleFileUpload}
            />
          </div>

          <div
            className="col-12-m8"
            id="urlContainer"
            style={{ display: url ? "block" : "none" }}
          >
            <label className="input__label" htmlFor="url">
              Enter Image URL
            </label>
            <div className="flex">
              <input
                type="text"
                id="url"
                placeholder="https://path.to/your.jpg"
                className="input"
                value={url}
                onChange={handleUrlChange}
              />
            </div>
          </div>

          <div className="col-6-m3" id="format">
            <label className="input__label">Detect Face Shape</label>
            <div>
              <button
                type="button"
                className={`bttn left fill ${
                  format === "image" ? "active" : ""
                }`}
                onClick={() => setFormat("image")}
              >
                Image
              </button>
              <button
                type="button"
                className={`bttn right fill ${
                  format === "json" ? "active" : ""
                }`}
                onClick={() => setFormat("json")}
              >
                JSON
              </button>
            </div>
          </div>

          {format === "image" && (
            <>
              <div className="col-6-m3" id="labels">
                <label className="input__label">Labels</label>
                <div>
                  <button
                    type="button"
                    className={`bttn left fill ${
                      labels === "on" ? "active" : ""
                    }`}
                    onClick={() => setLabels("on")}
                  >
                    On
                  </button>
                  <button
                    type="button"
                    className={`bttn right fill ${
                      labels === "off" ? "active" : ""
                    }`}
                    onClick={() => setLabels("off")}
                  >
                    Off
                  </button>
                </div>
              </div>

              <div className="col-6-m3" id="strokeWidth">
                <label className="input__label">Stroke Width</label>
                <input
                  className="input"
                  type="number"
                  id="stroke"
                  value={strokeWidth}
                  onChange={handleStrokeWidthChange}
                />
              </div>
            </>
          )}

          <div className="col-6-m3" id="confidence">
            <label className="input__label">Confidence</label>
            <input
              className="input"
              type="number"
              value={confidence}
              onChange={handleConfidenceChange}
            />
          </div>

          <div className="col-6-m3" id="overlap">
            <label className="input__label">Overlap</label>
            <input
              className="input"
              type="number"
              value={overlap}
              onChange={handleOverlapChange}
            />
          </div>

          <div className="col-6-m3" id="apiKey">
            <label className="input__label">API Key</label>
            <input
              className="input"
              type="text"
              value={apiKey}
              onChange={handleApiKeyChange}
            />
          </div>

          <div className="col-6-m3" id="model">
            <label className="input__label">Model</label>
            <input
              className="input"
              type="text"
              value={model}
              onChange={handleModelChange}
            />
          </div>
        </div>
      </div>

      <div className="content">
        <div className="content__grid">
          <div className="col-12">
            <button type="submit" className="bttn primary">
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </div>
      </div>

      {result && (
        <div className="content">
          <div className="content__grid">
            <div className="col-12">
              <div className="result">{result}</div>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default FaceShapeDetector;
