
const Tips = () => {
  return (
    <div>
      {" "}
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
    </div>
  );
}

export default Tips