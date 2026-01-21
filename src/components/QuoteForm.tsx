"use client";

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

const FALLBACK_FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_ME"; // Replace REPLACE_ME with your real Formspree form ID.
const MAX_FILES = 10;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
];

type SubmissionState = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const previewUrlsRef = useRef<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({ completed: 0, total: 0 });

  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_URL || FALLBACK_FORMSPREE_ENDPOINT;
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  useEffect(() => {
    return () => {
      previewUrlsRef.current.forEach(URL.revokeObjectURL);
    };
  }, []);

  const clearPhotos = () => {
    previewUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
    previewUrlsRef.current = [];
    setPreviews([]);
    setSelectedFiles([]);
    setPhotoError("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files?.length) {
      return;
    }

    setPhotoError("");
    const rawFiles = Array.from(files);
    const remainingSlots = MAX_FILES - selectedFiles.length;
    const selected: File[] = [];
    const errors: string[] = [];

    for (const file of rawFiles) {
      if (selected.length >= remainingSlots) {
        errors.push(`You can select up to ${MAX_FILES} photos total.`);
        break;
      }

      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        errors.push(
          `${file.name} isn’t a supported format. Only JPG, PNG, WebP, and HEIC files are allowed.`,
        );
        continue;
      }

      if (file.size > MAX_FILE_SIZE) {
        errors.push(`${file.name} exceeds the 10 MB per-photo limit.`);
        continue;
      }

      selected.push(file);
    }

    if (selected.length) {
      const previewUrls = selected.map((file) => URL.createObjectURL(file));
      previewUrlsRef.current = [...previewUrlsRef.current, ...previewUrls];
      setSelectedFiles((prev) => [...prev, ...selected]);
      setPreviews((prev) => [...prev, ...previewUrls]);
    }

    if (errors.length) {
      setPhotoError(errors.join(" "));
    } else {
      setPhotoError("");
    }

    event.target.value = "";
  };

  const handleRemovePhoto = (index: number) => {
    setSelectedFiles((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });

    setPreviews((prev) => {
      const updated = [...prev];
      const [removedUrl] = updated.splice(index, 1);
      if (removedUrl) {
        URL.revokeObjectURL(removedUrl);
        previewUrlsRef.current = previewUrlsRef.current.filter((url) => url !== removedUrl);
      }
      return updated;
    });
  };

  const uploadToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset ?? "");

    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
      method: "POST",
      body: formData,
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      const message =
        payload?.error?.message || "Unable to upload photos. Please try again.";
      throw new Error(message);
    }

    return payload.secure_url;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    setPhotoError("");

    if (!formspreeEndpoint) {
      setErrorMessage("Quote form is not configured. Please try again later.");
      setStatus("error");
      return;
    }

    const photoUrls: string[] = [];

    try {
      if (selectedFiles.length > 0) {
        if (!cloudName || !uploadPreset) {
          throw new Error("Photo uploads require Cloudinary configuration.");
        }

        setIsUploading(true);
        setUploadProgress({ completed: 0, total: selectedFiles.length });

        for (let i = 0; i < selectedFiles.length; i += 1) {
          const secureUrl = await uploadToCloudinary(selectedFiles[i]);
          photoUrls.push(secureUrl);
          setUploadProgress((prev) => ({
            ...prev,
            completed: prev.completed + 1,
          }));
        }
      }

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          photo_urls: photoUrls.join("\n"),
          _subject: "New quote request from LeatherFixPro site",
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Unable to send your message. Please try again.");
      }

      clearPhotos();
      setFormData({ name: "", phone: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again.";
      setErrorMessage(message);
      setStatus("error");
    } finally {
      setIsUploading(false);
      setUploadProgress({ completed: 0, total: 0 });
    }
  };

  const isSubmitDisabled = status === "submitting" || isUploading;

  const uploadHint =
    isUploading && uploadProgress.total > 0
      ? `Uploading ${uploadProgress.completed}/${uploadProgress.total}…`
      : "";

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <label className="form-label">
        Name
        <input
          className="form-input"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          type="text"
          placeholder="Full name"
        />
      </label>
      <label className="form-label">
        Phone
        <input
          className="form-input"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          type="tel"
          placeholder="+1 (555) 555-5555"
        />
      </label>
      <label className="form-label">
        Email (optional)
        <input
          className="form-input"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="you@example.com"
        />
      </label>
      <label className="form-label">
        Message
        <textarea
          className="form-input"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Describe the job, location, and timing needs."
        />
      </label>
      <label className="form-label">
        Photos (optional)
        <input
          className="form-input"
          type="file"
          accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
          multiple
          onChange={handleFileInputChange}
        />
        <p className="form-hint">
          {selectedFiles.length}/{MAX_FILES} photos selected. JPG, PNG, WebP, HEIC only. Max 10 MB/photo.
        </p>
      </label>
      {photoError && <p className="form-status error">{photoError}</p>}
      {previews.length > 0 && (
        <div className="photo-preview-grid">
          {previews.map((url, index) => (
            <div key={`${url}-${index}`} className="photo-preview">
              <img src={url} alt={`Selected photo ${index + 1}`} />
              <button
                className="photo-remove"
                type="button"
                onClick={() => handleRemovePhoto(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {status === "success" && (
        <p className="form-status success">Quote request sent! We'll be in touch shortly.</p>
      )}
      {status === "error" && <p className="form-status error">{errorMessage}</p>}
      {uploadHint && <p className="form-status info">{uploadHint}</p>}
      <button className="quote-submit" type="submit" disabled={isSubmitDisabled}>
        {isSubmitDisabled ? "Sending…" : "Send Request"}
      </button>
    </form>
  );
}
