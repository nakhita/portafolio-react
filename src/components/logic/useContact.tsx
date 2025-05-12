import { useState } from "react";
import emailjs from "emailjs-com";

export const useContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");

  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Please enter your name";
        break;
      case "email":
        if (!value.trim()) {
          error = "Please enter your email";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case "subject":
        if (!value) error = "Please select a subject";
        break;
      case "message":
        if (!value.trim()) {
          error = "Please enter a message";
        } else if (value.length > 1000) {
          error = "Message cannot exceed 1000 characters";
        }
        break;
    }

    return error;
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleCaptcha = (value: string | null) => {
    setIsCaptchaVerified(!!value);
  };

  const handleCloseStatus = () => {
    setStatus("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || !isCaptchaVerified) return;

    setIsSubmitting(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsCaptchaVerified(false);
      })
      .catch(() => setStatus("error"))
      .finally(() => setIsSubmitting(false));
  };

  return {
    formData,
    handleChange,
    handleBlur,
    handleSubmit,
    handleCaptcha,
    handleCloseStatus,
    isCaptchaVerified,
    isSubmitting,
    errors,
    status,
  };
};
