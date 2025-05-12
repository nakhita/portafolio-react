import React from "react";
import "../styles/contact.css";
import { useContact } from "../components/logic/useContact";
import ReCAPTCHA from "react-google-recaptcha";

const Contact: React.FC = () => {
  const {
    formData,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    handleCaptcha,
    handleCloseStatus,
    isCaptchaVerified,
    isSubmitting,
    status,
  } = useContact();

  return (
    <section className="contact-wrapper">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">
        You can contact me through this form or directly via{" "}
        <a
          href="https://www.linkedin.com/in/dalma-fernandez-softwaredeveloper"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          LinkedIn
        </a>
        .
      </p>

      {status === "success" && (
        <div className="contact-feedback contact-success">
          <div className="contact-success-texts">
            <p className="contact-success-title">Message sent successfully.</p>
            <p className="contact-success-subtitle">
              We’ll reply within 72 hours — please check your spam folder just
              in case.
            </p>
          </div>
          <button onClick={handleCloseStatus}>×</button>
        </div>
      )}
      {status === "error" && (
        <div className="contact-feedback contact-error-box">
          An error occurred while sending the message.
          <button onClick={handleCloseStatus}>×</button>
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="contact-label" htmlFor="name">
          Name
        </label>
        <input
          className="contact-input"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && <p className="contact-error">{errors.name}</p>}

        <label className="contact-label" htmlFor="email">
          Email
        </label>
        <input
          className="contact-input"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <p className="contact-error">{errors.email}</p>}

        <label className="contact-label" htmlFor="subject">
          Subject
        </label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          className="contact-select"
        >
          <option value="">Select a subject</option>
          <option value="Job Offer">Job Offer</option>
          <option value="Request for more information">
            Request for more information
          </option>
        </select>
        {errors.subject && <p className="contact-error">{errors.subject}</p>}

        <label className="contact-label" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          className="contact-textarea"
          placeholder="Write your message (max 1000 characters)"
          rows={5}
          maxLength={1000}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.message && <p className="contact-error">{errors.message}</p>}

        <p className="contact-captcha-info">
          Please complete the captcha before sending
        </p>

        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={handleCaptcha}
        />

        <button
          type="submit"
          disabled={!isCaptchaVerified || isSubmitting}
          className="contact-button"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
