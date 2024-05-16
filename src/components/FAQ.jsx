import { useState } from "react";

const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section className="pt-0 pt-lg-5" id="faq">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col-lg-10 col-xl-8 mx-auto">
            <h2 className="mb-4 text-center">Frequently asked questions</h2>
            {/* FAQ START */}
            <div
              className="accordion accordion-icon accordion-bg-light"
              id="accordionFaq"
            >
              {/* FAQ items */}
              <div className="accordion-item mb-3">
                <h6 className="accordion-header font-base" id="heading-1">
                  <button
                    className={`accordion-button fw-bold rounded ${
                      activeAccordion === "collapse-1" ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggleAccordion("collapse-1")}
                    aria-expanded={activeAccordion === "collapse-1"}
                    aria-controls="collapse-1"
                  >
                    How does the facial symmetry analysis work?
                  </button>
                </h6>
                {/* FAQ body */}
                <div
                  id="collapse-1"
                  className={`accordion-collapse collapse ${
                    activeAccordion === "collapse-1" ? "show" : ""
                  }`}
                  aria-labelledby="heading-1"
                  data-bs-parent="#accordionFaq"
                >
                  <div className="accordion-body mt-3 pb-0">
                    The facial symmetry analysis on our website utilizes
                    advanced image processing and AI algorithms. Upon uploading
                    a photo, it is examined to pinpoint facial features like the
                    eyes, nose, mouth, and overall facial structure.
                    Mathematical and statistical methods are then applied to
                    evaluate the symmetry of the face. Our AI models, trained
                    with extensive datasets, deliver accurate and reliable
                    symmetry assessments.
                  </div>
                </div>
              </div>
              {/* More FAQ items */}
              <div className="accordion-item mb-3">
                <h6 className="accordion-header font-base" id="heading-2">
                  <button
                    className={`accordion-button fw-bold rounded ${
                      activeAccordion === "collapse-2" ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggleAccordion("collapse-2")}
                    aria-expanded={activeAccordion === "collapse-2"}
                    aria-controls="collapse-2"
                  >
                    What types of photos can I use for the analysis?
                  </button>
                </h6>
                <div
                  id="collapse-2"
                  className={`accordion-collapse collapse ${
                    activeAccordion === "collapse-2" ? "show" : ""
                  }`}
                  aria-labelledby="heading-2"
                  data-bs-parent="#accordionFaq"
                >
                  <div className="accordion-body mt-3 pb-0">
                    Our facial symmetry analysis accepts standard image formats
                    like JPEG and PNG. The photo should be a clear, well-lit
                    image of your face, preferably taken from the front. Avoid
                    low-resolution or blurry images, as they may lead to
                    inaccurate results.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-3">
                <h6 className="accordion-header font-base" id="heading-3">
                  <button
                    className={`accordion-button fw-bold rounded ${
                      activeAccordion === "collapse-3" ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggleAccordion("collapse-3")}
                    aria-expanded={activeAccordion === "collapse-3"}
                    aria-controls="collapse-3"
                  >
                    Is my personal data and privacy protected?
                  </button>
                </h6>
                <div
                  id="collapse-3"
                  className={`accordion-collapse collapse ${
                    activeAccordion === "collapse-3" ? "show" : ""
                  }`}
                  aria-labelledby="heading-3"
                  data-bs-parent="#accordionFaq"
                >
                  <div className="accordion-body mt-3 pb-0">
                    Yes, your privacy is of utmost importance to us. We do not
                    store or share any personal data or images uploaded to our
                    website. The facial symmetry analysis is performed securely
                    on our servers, and the results are displayed to you without
                    saving any identifiable information.
                  </div>
                </div>
              </div>
            </div>
            {/* FAQ END */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
