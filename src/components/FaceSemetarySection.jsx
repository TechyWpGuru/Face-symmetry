
const FaceSemetarySection = () => {
  return (
    <main>
      <section className="pt-0 pt-lg-3" id="check_face_symmetry">
        <div className="container">
          {/* Background image */}
          <div
            className="rounded-3 py-5 p-3 p-sm-5"
            style={{
              background:
                "linear-gradient(261.84deg, #8A2BE2 30.58%, #A52A2A 81.26%, rgba(64, 224, 208, 0.81) 136.94%)",
            }}
          >
            {/* Banner title */}
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
            {/* Search START */}
            <div className="col-xl-10 mx-auto">
              <div className="bg-white bg-opacity-100 border border-light border-opacity-25 shadow-sm rounded-3 p-4 mt-2">
                {/* Form START */}
                <form
                  id="scanner_form"
                  className="row g-3 justify-content-center align-items-center"
                  action="https://www.face-symmetry-test.com/results_preview"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <input
                    type="hidden"
                    name="csrfmiddlewaretoken"
                    value="vESgRDdnatAqaHgyZvweE0RjFqNqBPWIbd2oOkxc8FD8TRq5hd1AZrhh1xuN0a5I"
                  />
                  <div className="col-lg-9">
                    {/* Input */}
                    <div className="form-input position-relative">
                      <input
                        className="form-control me-1"
                        id="upload_image"
                        type="file"
                        name="image"
                        accept="image/png, image/jpg, image/jpeg"
                        required
                        placeholder="Choose a photo of yourself"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 d-grid">
                    {/* Search */}
                    <button
                      className="btn btn-primary mb-0"
                      id="submit_button"
                      type="submit"
                    >
                      <span id="button_text">Scan</span>
                      <span
                        id="loading_spinner"
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                        style={{ display: "none" }}
                      ></span>
                    </button>
                  </div>
                </form>
                {/* Form END */}
              </div>
            </div>
            {/* Search END */}
          </div>
        </div>
      </section>
      <section className="pt-4 pt-md-5" id="tipsSection">
        <div className="container">
          {/* Title */}
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="mb-3">
                Tips to Maximize Your FaceSymAI Experience
              </h2>
              <p className="lead">
                Make the most out of your facial symmetry analysis with these
                simple tips.
              </p>
            </div>
          </div>
          {/* Tip items */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {/* Tip 1: Use Good Lighting */}
            <div className="col">
              <div className="card h-100 border-0 shadow">
                <div className="card-body">
                  <h5 className="card-title">Use Good Lighting</h5>
                  <p className="card-text">
                    Ensure your face is well-lit, with even lighting to avoid
                    shadows that might distort your facial features. Natural
                    daylight is preferable, facing towards the light source.
                  </p>
                </div>
              </div>
            </div>
            {/* Tip 2: Maintain a Neutral Expression */}
            <div className="col">
              <div className="card h-100 border-0 shadow">
                <div className="card-body">
                  <h5 className="card-title">Maintain a Neutral Expression</h5>
                  <p className="card-text">
                    Keep your facial expression neutral and relaxed. Avoid
                    smiling or frowning excessively, as it may affect the
                    symmetry of your face in the analysis.
                  </p>
                </div>
              </div>
            </div>
            {/* Tip 3: Take Multiple Photos */}
            <div className="col">
              <div className="card h-100 border-0 shadow">
                <div className="card-body">
                  <h5 className="card-title">Take Multiple Photos</h5>
                  <p className="card-text">
                    Capture multiple photos from different angles to ensure a
                    comprehensive analysis. This helps to account for variations
                    in facial symmetry based on perspective.
                  </p>
                </div>
              </div>
            </div>
            {/* Tip 4: Maintain Consistency */}
            <div className="col">
              <div className="card h-100 border-0 shadow">
                <div className="card-body">
                  <h5 className="card-title">Maintain Consistency</h5>
                  <p className="card-text">
                    When comparing results over time, maintain consistency in
                    factors such as lighting conditions, facial expression, and
                    camera settings for accurate analysis.
                  </p>
                </div>
              </div>
            </div>
            {/* Tip 5: Remove Accessories */}
            <div className="col">
              <div className="card h-100 border-0 shadow">
                <div className="card-body">
                  <h5 className="card-title">Remove Accessories</h5>
                  <p className="card-text">
                    Remove accessories like glasses, hats, or hairbands that may
                    obstruct your facial features, ensuring clear visibility for
                    accurate analysis.
                  </p>
                </div>
              </div>
            </div>
            {/* Tip 6: Relax Facial Muscles */}
            <div className="col">
              <div className="card h-100 border-0 shadow">
                <div className="card-body">
                  <h5 className="card-title">Relax Facial Muscles</h5>
                  <p className="card-text">
                    Before taking the photo, consciously relax your facial
                    muscles to avoid tension or asymmetry that may affect the
                    analysis results.
                  </p>
                </div>
              </div>
            </div>
            {/* Add more tips as needed */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FaceSemetarySection;
