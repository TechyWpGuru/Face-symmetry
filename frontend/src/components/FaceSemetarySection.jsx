import { useState } from "react";
import axios from "axios";
import "../styles/FaceSymmetryScanner.css";
import { toast } from "react-toastify";

const FaceSemetarySection = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [preview, setPreview] = useState(null); // State for image preview
  const [isLoading, setIsLoading] = useState(false);
  const [inputMethod, setInputMethod] = useState("file");
  const [result, setResult] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setPreview(URL.createObjectURL(file)); // Set preview to file URL
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
    setPreview(event.target.value); // Set preview to URL input
  };

  const getBase64FromFile = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    });
  };

  function scrollToResult() {
    const resultElement = document.getElementById("result");
    if (resultElement) {
      resultElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      let imageData;
      if (file) {
        const base64Image = await getBase64FromFile(file);
        imageData = base64Image.split(",")[1];
      } else if (url) {
        const response = await axios.get(url, { responseType: "blob" });
        const base64Image = await getBase64FromFile(response.data);
        imageData = base64Image.split(",")[1];
      } else {
        setIsLoading(false);
        toast.error("Please select a file or enter an image URL.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/analyze-image",
        { image: imageData },
        { headers: { "Content-Type": "application/json" } }
      );
      let data = await response.data;
      setResult(data);
      setTimeout(scrollToResult, 100);
    } catch (error) {
      toast.error("Failed to process the image. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <section className="pt-0 pt-lg-3" id="check_face_symmetry">
        <div className="container">
          <div
            className="rounded-3 py-5 p-3 p-sm-5"
            style={{
              background:
                "linear-gradient(261.84deg, #8A2BE2 30.58%, #A52A2A 81.26%, rgba(64, 224, 208, 0.81) 136.94%)",
            }}
          >
            <div className="row">
              <div className="col-xl-10 m-auto text-center">
                <h1 className="text-white display-6 mb-3">
                  Check your face symmetry
                </h1>
                <h6 className="text-white fw-normal mb-3">
                  Upload a photo of yourself and let the AI determine your face
                  symmetry.
                </h6>
              </div>
            </div>
            <div className="col-xl-10 mx-auto">
              <div className="bg-white bg-opacity-100 border border-light border-opacity-25 shadow-sm rounded-3 p-4 mt-2">
                <form
                  id="scanner_form"
                  className="row g-3 justify-content-center align-items-center"
                  onSubmit={handleSubmit}
                >
                  <div className="col-lg-9 text-center">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Input method"
                    >
                      <button
                        type="button"
                        className={`btn btn-secondary ${
                          inputMethod === "file" ? "active btn-primary" : ""
                        }`}
                        onClick={() => setInputMethod("file")}
                      >
                        Upload File
                      </button>
                      <button
                        type="button"
                        className={`btn btn-secondary ${
                          inputMethod === "url" ? "active btn-primary" : ""
                        }`}
                        onClick={() => setInputMethod("url")}
                      >
                        Enter URL
                      </button>
                    </div>
                  </div>

                  {inputMethod === "file" && (
                    <div className="col-lg-9">
                      <div className="form-input position-relative">
                        <input
                          className="form-control me-1"
                          id="upload_image"
                          type="file"
                          name="image"
                          accept="image/png, image/jpg, image/jpeg"
                          onChange={handleFileUpload}
                          placeholder="Choose a photo of yourself"
                        />
                      </div>
                    </div>
                  )}

                  {inputMethod === "url" && (
                    <div className="col-lg-9">
                      <div className="form-input position-relative">
                        <input
                          className="form-control me-1"
                          id="upload_url"
                          type="text"
                          name="url"
                          placeholder="Enter image URL"
                          value={url}
                          onChange={handleUrlChange}
                        />
                      </div>
                    </div>
                  )}

                  <div className="col-lg-6 d-grid">
                    <button
                      className="btn btn-primary mb-0"
                      id="submit_button"
                      type="submit"
                      disabled={isLoading}
                    >
                      <span id="button_text">
                        {isLoading ? "Processing..." : "Scan"}
                      </span>
                      <span
                        id="loading_spinner"
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                        style={{ display: isLoading ? "inline-block" : "none" }}
                      ></span>
                    </button>
                  </div>
                </form>

                {preview && (
                  <div className="mx-auto text-center mt-3">
                    <img
                      src={preview}
                      alt="Selected face"
                      width={100}
                      height={100}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {isLoading && (
            <div className="loading-spinner text-center mt-4">
              <img
                src="https://spokanerotaract.com/face-shape-detector.gif"
                alt="Processing..."
                width={100}
                height={100}
              />
            </div>
          )}

          {!isLoading && result && (
            <div className="content">
              <div className="col-12 text-center mt-4" id="result">
                <h3>Facial Symmetry Analysis Result</h3>
                <div className="result">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>
                          <h5>Shape</h5>
                        </th>
                        <th>
                          <h5>Percentage</h5>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(result.shapes).map((category, index) => (
                        <tr key={index}>
                          <td>{category}</td>
                          <td>
                            <div className="progress accordion-header font-base">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{
                                  width: `${result.shapes[category]}`,
                                }}
                                aria-valuenow={result.shapes[category]}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                {result.shapes[category]}
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-12 ">
                <h4>Analysis Description</h4>
                <h6 className="accordion-header font-base">
                  {result.description}
                </h6>
              </div>
              <hr
                style={{
                  height: "4px", // Adjust the height as needed
                  width: "100%", // Set the width to 100% to span the entire container
                  background:
                    "linear-gradient(261.84deg, #8A2BE2 30.58%, #A52A2A 81.26%, rgba(64, 224, 208, 0.81) 136.94%)",
                  border: "none", // Remove default border
                }}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FaceSemetarySection;
