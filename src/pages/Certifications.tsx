import React, { useState } from "react";
import "../styles/certifications.css";
import { useCertifications } from "../components/logic/useCertifications";
import CertificateModal from "../components/CertificateModal";
import { certificationsData } from "../components/data/certificationsData";

const Certifications: React.FC = () => {
  const { certificationsClass } = useCertifications();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpen = (img: string) => {
    setSelectedImage(img);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <section className={`certifications-section ${certificationsClass}`}>
      <div>
        <h1 className="certifications-title">Certifications</h1>
        <p className="certifications-subtitle">
          These certifications are backed by different platforms. Click on
          "View" to see each certificate. Please note that not all my knowledge
          is reflected here, many skills were self-taught without certificates.
          I recommend checking the tags in my projects to see the full range of
          technologies I've worked with.
        </p>
      </div>

      {certificationsData.map((section, index) => (
        <div key={index}>
          <h2 className="certification-category">{section.platform}</h2>
          <div className="certification-grid">
            {section.items.map((cert, i) => (
              <div key={i} className="certification-card">
                <p className="text-white  tracking-wider ">{cert.title}</p>
                <img src={cert.logo} alt={cert.title} />
                <p
                  className="certification-button"
                  onClick={() => handleOpen(cert.certificate)}
                >
                  &gt; View &lt;
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedImage && (
        <CertificateModal imageSrc={selectedImage} onClose={handleClose} />
      )}
    </section>
  );
};

export default Certifications;
