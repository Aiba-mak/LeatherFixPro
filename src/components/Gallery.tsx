"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { GalleryImage } from "../lib/gallery";

type GalleryProps = {
  images: GalleryImage[];
};

export default function Gallery({ images }: GalleryProps) {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!lightboxImage) {
      document.body.style.overflow = "";
      return undefined;
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxImage(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [lightboxImage]);

  return (
    <section id="gallery" className="section gallery-section">
      <h2 className="section-title">Gallery</h2>
      <p className="section-description">
        Recent on-site work across automotive, marine, and residential interiors. Tap any preview
        to open the lightbox and see the finish in more detail.
      </p>
      <div className="gallery-grid">
        {images.map((image) => (
          <figure key={image.src} className="gallery-item">
            <button
              type="button"
              className="gallery-trigger"
              onClick={() => setLightboxImage(image)}
              aria-label="Open gallery preview"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={280}
                className="gallery-thumb"
                loading="lazy"
              />
            </button>
          </figure>
        ))}
      </div>

      {lightboxImage && (
        <div className="gallery-lightbox" role="presentation" onClick={() => setLightboxImage(null)}>
          <div
            className="gallery-lightbox-inner"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={() => setLightboxImage(null)}
              aria-label="Close preview"
            >
              &times;
            </button>
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              width={1000}
              height={650}
              className="gallery-lightbox-image"
              priority
            />
            <p className="gallery-lightbox-meta">{lightboxImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}